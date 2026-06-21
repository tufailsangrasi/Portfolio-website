"""SMTP mailer for the portfolio contact form.

Sends a plain-text + HTML email through Gmail SMTP (STARTTLS on :587)
to the configured receiver. Never echoes credentials or stack traces
back to the API caller — failures are mapped to generic messages.
"""

from __future__ import annotations

import logging
import smtplib
import ssl
from email.message import EmailMessage
from email.utils import formataddr

from app.models.schemas import ContactMessage

logger = logging.getLogger(__name__)


class MailerError(Exception):
    """Raised for any SMTP / configuration failure. Safe to surface to clients."""


def _require_env(name: str) -> str:
    import os

    value = os.getenv(name, "").strip()
    if not value:
        raise MailerError(f"Server is missing required configuration: {name}.")
    return value


def send_contact_email(payload: ContactMessage) -> None:
    """Send a contact-form submission to the configured receiver.

    Uses Gmail SMTP over STARTTLS on port 587. The sender is the
    configured GMAIL_ADDRESS; Reply-To is set to the visitor's email so
    Tufail can reply directly from Gmail.
    """

    gmail_address = _require_env("GMAIL_ADDRESS")
    gmail_password = _require_env("GMAIL_APP_PASSWORD")
    receiver = _require_env("RECEIVER_EMAIL")

    subject = f"New Portfolio Contact from {payload.name}"

    text_body = (
        f"You received a new message from your portfolio contact form.\n\n"
        f"Name:    {payload.name}\n"
        f"Email:   {payload.email}\n\n"
        f"Message:\n"
        f"{payload.message}\n"
    )

    safe_message = payload.message.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    safe_name = payload.name.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    html_body = f"""
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 4px; color: #1F2024; font-size: 18px;">New Portfolio Message</h2>
      <p style="margin: 0 0 20px; color: #6B7280; font-size: 13px;">Someone filled out your contact form.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
        <tr>
          <td style="color: #6B7280; padding: 4px 0; width: 70px; font-size: 13px;">Name</td>
          <td style="color: #1F2024; font-weight: 600; font-size: 13px;">{safe_name}</td>
        </tr>
        <tr>
          <td style="color: #6B7280; padding: 4px 0; font-size: 13px;">Email</td>
          <td style="color: #1F2024; font-weight: 600; font-size: 13px;">{payload.email}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 0 0 16px;" />
      <p style="color: #6B7280; font-size: 13px; margin: 0 0 6px;">Message</p>
      <p style="color: #1F2024; line-height: 1.6; font-size: 14px; white-space: pre-wrap; margin: 0;">{safe_message}</p>
    </div>
    """.strip()

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = formataddr(("Portfolio Contact", gmail_address))
    msg["To"] = receiver
    msg["Reply-To"] = payload.email
    msg.set_content(text_body)
    msg.add_alternative(html_body, subtype="html")

    try:
        context = ssl.create_default_context()
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=15) as server:
            server.ehlo()
            server.starttls(context=context)
            server.ehlo()
            server.login(gmail_address, gmail_password)
            server.send_message(msg)
    except smtplib.SMTPAuthenticationError as exc:
        logger.error("SMTP auth failed: %s", exc)
        raise MailerError("Email server rejected the credentials. Check GMAIL_APP_PASSWORD.") from exc
    except (smtplib.SMTPException, ssl.SSLError, OSError) as exc:
        logger.error("SMTP send failed: %s", exc)
        raise MailerError("Could not send the email. Please try again later.") from exc