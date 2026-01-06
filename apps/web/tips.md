1️⃣ Where to write PAGE content
📍 Pages (+page.svelte)

Purpose: Layout + composition ONLY

✅ What goes here:

Page structure

High-level layout

Page-level data loading

Wiring components together

❌ What should NOT go here:

Complex logic

API calls (except via helpers)

Large CSS blocks

Reusable UI

2️⃣ Where to write UI components
📍 Components (lib/components/)

Purpose: Encapsulated UI blocks

Organize by domain, not type:



CONTEXT
You are helping me build “ViVi-Trips”, an AI-powered travel planner web app.

Tech stack:
- SvelteKit (frontend + server routes)
- Tailwind CSS
- Vercel-first deployment
- Serverless API routes (+server.ts)
- FastAPI may be added later for scaling (not now)

Product goals:
- Generate realistic, budget-aware, day-by-day travel itineraries using AI
- Support partial regeneration (single-day edits)
- Editable itineraries with clean UX
- Startup-ready MVP, not over-engineered

Guidelines:
- Give step-by-step direction, not hand-holding
- Prefer clean architecture and best practices
- Avoid premature optimization and overengineering
- Think like a solo founder building a commercial product

Assume I want to implement most things myself; guide me on *what to do and in what order*.
