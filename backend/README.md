# Portfolio Backend (FastAPI)

A single-endpoint FastAPI service that receives contact-form submissions
from the Next.js frontend and forwards them to your Gmail via SMTP.

## Endpoint

`POST /api/contact`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hey Tufail, I'd love to chat about a project..."
}
```

Returns `200 { "status": "success" }` on success. `4xx` for invalid input
and `502` for SMTP failures. The `Reply-To` header is set to the
visitor's email so you can reply directly from Gmail.

## Setup

```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS / Linux:
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# fill in .env with your real values (see below)
python -m uvicorn app.main:app --reload --port 8000
```

The API will be available at <http://localhost:8000> and interactive
docs at <http://localhost:8000/docs>.

## Generate a Gmail App Password

The backend logs in with a **Gmail App Password**, not your normal
account password. You must have **2-Step Verification** enabled first.

1. Go to <https://myaccount.google.com/security>.
2. Enable **2-Step Verification** if it isn't already.
3. Open **App passwords** (under "Signing in to Google").
4. App: **Mail**. Device: **Other** → name it `Portfolio Backend`.
5. Click **Create** and copy the 16-character password.
6. Paste it into `backend/.env` as `GMAIL_APP_PASSWORD` (remove spaces).

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `GMAIL_ADDRESS` | yes | Sender address (your Gmail or a dedicated alias) |
| `GMAIL_APP_PASSWORD` | yes | 16-char App Password from Google |
| `RECEIVER_EMAIL` | yes | Inbox that receives the messages |
| `ALLOWED_ORIGINS` | no | Comma-separated CORS origins (default: `localhost:3000`) |
| `HOST` / `PORT` | no | Bind address (default: `0.0.0.0:8000`) |

Never commit `.env`. The `.env.example` file ships with safe placeholders.

## Wiring with the Next.js frontend

In the frontend, create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

The contact form posts to `${NEXT_PUBLIC_API_URL}/api/contact`.

## Production

For production, run with a real WSGI/ASGI server (e.g. behind nginx or
on Fly.io / Railway / Render). Set `ALLOWED_ORIGINS` to your real
Next.js domain (e.g. `https://tufailahmed.dev`).