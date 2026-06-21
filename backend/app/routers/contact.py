"""POST /api/contact — receives portfolio contact-form submissions.

Validates the payload with Pydantic, then hands off to the mailer
service. Returns 200 { status: "success" } on success and a generic
4xx/5xx with a safe message on failure (no SMTP stack traces).
"""

from __future__ import annotations

import logging

from fastapi import APIRouter, HTTPException, status

from app.models.schemas import ContactMessage, ContactResponse
from app.services.mailer import MailerError, send_contact_email

router = APIRouter(prefix="/api", tags=["contact"])
logger = logging.getLogger(__name__)


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_200_OK,
)
def submit_contact(payload: ContactMessage) -> ContactResponse:
    try:
        send_contact_email(payload)
    except MailerError as exc:
        # Surface as a 502 — the request itself was fine, the upstream failed.
        raise HTTPException(status_code=status.HTTP_502_BAD_GATEWAY, detail=str(exc)) from exc
    except Exception as exc:  # pragma: no cover — defensive last line
        logger.exception("Unexpected error while sending contact email")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not send the email. Please try again later.",
        ) from exc

    return ContactResponse(status="success")