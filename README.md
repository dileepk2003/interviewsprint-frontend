# InterviewSprint (Frontend Internship Project)

A mobile-first interview preparation board built with **Next.js + TypeScript** focused on polished frontend UX.

## Live Demo
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Vercel: https://YOUR-VERCEL-LINK.vercel.app

## GitHub Repository
- Repo: https://github.com/YOUR-USERNAME/interviewsprint-frontend

## Why this project
Built to showcase frontend engineering skills aligned with SWE Frontend Internship expectations:
- Strong React + TypeScript fundamentals
- Responsive/mobile-first UI
- Reusable component architecture
- Smooth user interactions and clean product feel

## Features
- Add interview tasks with category + priority
- Mark tasks complete/incomplete
- Delete tasks
- Filter by status (All / Pending / Done)
- Filter by category
- Progress stats (total, done, pending, streak)
- Local storage persistence
- Dark themed polished UI

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Project Structure
```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    AddTaskForm.tsx
    BottomNav.tsx
    StatsCards.tsx
    TaskList.tsx
    ThemeToggle.tsx
  lib/
    storage.ts
  types/
    task.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production Build

```bash
npm run build
npm start
```

## Notes
This project is intentionally frontend-focused (no backend) to match internship requirements for frontend engineering, UI quality, and mobile web experience.