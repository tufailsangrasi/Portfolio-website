"""FastAPI entrypoint for the portfolio backend.

Exposes a single business endpoint: POST /api/contact.
Reads configuration from environment variables (see .env.example).
"""

from __future__ import annotations

import logging
import os
from typing import List

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import contact

# Load environment variables from backend/.env if present.
load_dotenv()

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")
logger = logging.getLogger(__name__)


def _parse_allowed_origins() -> List[str]:
    raw = os.getenv("ALLOWED_ORIGINS", "")
    if not raw.strip():
        # Sensible default for local Next.js dev.
        return ["http://localhost:3000", "http://127.0.0.1:3000"]
    return [origin.strip() for origin in raw.split(",") if origin.strip()]


app = FastAPI(
    title="Tufail Ahmed Portfolio API",
    version="1.0.0",
    description="Backend for the personal portfolio. Currently exposes /api/contact.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=_parse_allowed_origins(),
    allow_credentials=True,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(contact.router)


@app.get("/health", tags=["meta"])
def health() -> dict:
    """Lightweight liveness probe (no SMTP check)."""
    return {"status": "ok"}


@app.get("/", tags=["meta"])
def root() -> dict:
    return {
        "service": "tufail-portfolio-api",
        "endpoints": ["/api/contact", "/health", "/docs"],
    }


if __name__ == "__main__":  # pragma: no cover
    import uvicorn

    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("app.main:app", host=host, port=port, reload=True)