# Tufail Ahmed – Portfolio

Personal portfolio for **Tufail Ahmed**, ML/DL Engineer.
Frontend: **Next.js 15** + Tailwind CSS. Backend: **FastAPI** (contact form → Gmail SMTP).

## Quick Start

You need **two** dev servers running side by side.

### 1. Frontend

```bash
npm install
cp .env.local.example .env.local   # already filled with localhost:8000
npm run dev
# open http://localhost:3000
```

### 2. Backend (FastAPI)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows   (source .venv/bin/activate on macOS/Linux)
pip install -r requirements.txt
cp .env.example .env            # fill in Gmail credentials (see backend/README.md)
python -m uvicorn app.main:app --reload --port 8000
# API docs at http://localhost:8000/docs
```

See **[`backend/README.md`](./backend/README.md)** for the Gmail App Password
setup, all environment variables, and production notes.

## Your Checklist

| Task | Where |
|------|-------|
| Update phone & social URLs | `src/data/index.ts` |
| Add your photo | `public/images/profile.jpg` → uncomment `<img>` in `About.tsx` |
| Add your resume | `public/pdf/resume.pdf` |
| Add project banner images | `public/images/project-*.png` (paths set in `src/data/index.ts`) |
| Tune placeholder projects | `src/data/index.ts` → `projects[]` |
| Tune placeholder achievements | `src/data/index.ts` → `achievements[]` |
| Wire Gmail App Password | `backend/.env` |
| Frontend API URL | `.env.local` (`NEXT_PUBLIC_API_URL`) |
| Deploy | Vercel (frontend) + Fly.io / Railway (backend) — add env vars in both dashboards |

## File Structure

```
/                       ← Next.js frontend (App Router)
├── src/
│   ├── app/
│   │   ├── globals.css            Tailwind theme + section styles
│   │   ├── layout.tsx
│   │   └── page.tsx               Composes Header + 6 sections + Footer
│   ├── components/
│   │   ├── cards/                 ProjectCard, AchievementCard, EmailSuccess
│   │   ├── layouts/               Header, Footer
│   │   ├── sections/              Home, About, Skills, Projects, Achievements, Contact
│   │   └── ui/                    GithubLink, Icon, Toggle
│   ├── data/index.ts              ← Edit ALL your content here
│   └── lib/utils.ts
└── public/
    ├── images/   ← profile + project banner images
    └── pdf/      ← resume.pdf

/backend                ← FastAPI service
├── app/
│   ├── main.py            FastAPI entrypoint + CORS
│   ├── routers/contact.py POST /api/contact
│   ├── services/mailer.py SMTP send logic (Gmail STARTTLS)
│   └── models/schemas.py  Pydantic payload + response
├── .env.example          ← copy to .env and fill in
├── requirements.txt
└── README.md             ← Gmail App Password setup
```