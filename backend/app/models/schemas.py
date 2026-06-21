from pydantic import BaseModel, EmailStr, Field


class ContactMessage(BaseModel):
    """Incoming payload from the portfolio contact form."""

    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    status: str
    detail: str | None = None