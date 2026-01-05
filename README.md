# ✈️ ViVi-Trips

**ViVi-Trips** is an **AI-powered travel planner** that creates **personalized, budget-aware, day-by-day itineraries in seconds**.

Built as a **startup-ready MVP**, ViVi-Trips focuses on realistic travel planning, clean UX, and scalable architecture — making it suitable both as a commercial product and a strong portfolio project.

---

## 🌍 Project Overview

### 🎯 Goal

Build a web application that generates **personalized, realistic, and editable travel itineraries using AI**.

Users provide:

* Destination (city + country)
* Travel dates
* Budget
* Interests
* Travel pace

The app returns a **day-by-day itinerary** with:

* Activities split by time of day
* Estimated daily budgets
* Editing and regeneration options

---

## 👥 Target Users

* Solo travelers
* Couples / small groups
* Digital nomads
* Anyone planning short trips (3–10 days)

---

## ✨ Core Features (MVP)

### 1️⃣ Trip Creation

Users can input:

* **Destination** (city + country)
* **Start & end dates**
* **Budget** (low / medium / high or numeric)
* **Interests** (multi-select)

  * Food 🍜
  * Nature 🌲
  * Culture 🏛️
  * Shopping 🛍️
  * Nightlife 🌃
* **Travel pace**

  * Relaxed
  * Balanced
  * Packed

---

### 2️⃣ AI Itinerary Generation

For each day, the AI generates:

* Morning activity
* Afternoon activity
* Evening activity
* Optional food recommendations
* Approximate daily budget

**Example Output (JSON):**

```json
{
  "day": 2,
  "title": "Cultural Tokyo",
  "schedule": {
    "morning": "Meiji Shrine & Yoyogi Park",
    "afternoon": "Harajuku shopping streets",
    "evening": "Shibuya Crossing & local dinner"
  },
  "estimated_budget": "¥8,000–¥10,000"
}
```

---

### 3️⃣ Partial Regeneration

Users can regenerate **only specific days** instead of the full trip.

Supported modifiers:

* “Make this day cheaper”
* “More food-focused”
* “Rainy-day alternative”

This keeps edits fast, controlled, and user-friendly.

---

### 4️⃣ Editable Itinerary

* Reorder activities (drag & drop)
* Add personal notes per day
* Save manual changes without overwriting

---

### 5️⃣ Save & Share

* Save trips to user account
* Generate **shareable read-only public links**
* Perfect for sharing with friends or travel partners

---

## 🧠 AI Design

### AI Responsibilities

* Constraint-aware itinerary planning
* Budget & pace balancing
* Interest-based activity selection
* Partial itinerary regeneration

---

### Prompt Strategy

The system prompt enforces:

* Realistic travel time between locations
* Avoids over-packed days
* Budget awareness
* **Strict JSON-only output**

For partial regeneration, the AI:

* Uses the existing itinerary as context
* Modifies only the requested day

---

### Optional Enhancements (Future)

* Local tips per day
* Weather-aware suggestions
* Seasonal activity awareness

---

## 🏗️ Backend Architecture

### Tech Stack

* **FastAPI**
* **PostgreSQL**
* **SQLAlchemy / SQLModel**
* **Redis** (optional caching)
* **LLM API (OpenAI or equivalent)**
* **JWT-based authentication**

---

### API Endpoints

#### Trip Generation

```
POST /api/trips/generate
```

#### Regenerate Single Day

```
POST /api/trips/{trip_id}/regenerate-day
```

#### Save Trip

```
POST /api/trips/{trip_id}/save
```

#### Get Trip

```
GET /api/trips/{trip_id}
```

#### Public Share

```
GET /api/public/trips/{share_id}
```

---

### Database Schema (Simplified)

**User**

* id
* email
* password_hash
* created_at

**Trip**

* id
* user_id
* destination
* start_date
* end_date
* budget
* pace
* interests (array)
* created_at
* share_id

**ItineraryDay**

* id
* trip_id
* day_number
* title
* schedule (JSON)
* estimated_budget
* notes

---

## 🎨 Frontend Architecture

### Tech Stack

* **SvelteKit**
* **Tailwind CSS**
* **shadcn/ui**
* **Framer Motion**
* **React Query / TanStack Query**

---

### Key Screens

1️⃣ **Landing Page**

* Hero section + CTA
* Example itinerary preview

2️⃣ **Trip Setup Form**

* Step-based input flow
* Validation & progress indicator

3️⃣ **Itinerary View**

* Timeline or tabbed days
* Activity cards
* Budget badge per day
* Regenerate button

4️⃣ **Edit Mode**

* Drag & drop activities
* Notes per day
* Save changes

5️⃣ **Share Page**

* Read-only public itinerary view
* Clean, distraction-free layout

---

## 🧩 UX Considerations

* Skeleton loaders during AI generation
* Clear loading & error states
* Editable but safe defaults
* Mobile-friendly layouts

---

## 👥 Team Work Split (Example)

**Frontend**

* Trip input flow
* Itinerary UI
* Edit & drag-drop
* Animations

**Backend**

* API design
* Database schema
* Authentication & sharing

**AI**

* Prompt engineering
* JSON schema validation
* Partial regeneration logic

---

## 🗓️ 2–3 Week Execution Plan

### Week 1

* UI skeleton
* Trip input flow
* Base itinerary generation
* Database schema

### Week 2

* Itinerary view
* Partial regeneration
* Save & load trips
* UI polish

### Week 3 (Optional)

* Shareable links
* Drag & drop editing
* Performance optimizations
* Deployment

---

## ⚠️ Risks & Mitigations

| Risk             | Mitigation                      |
| ---------------- | ------------------------------- |
| AI hallucination | Strict JSON schema + validation |
| Slow responses   | Async calls + caching           |
| Over-scoped MVP  | City-level planning only        |
| UX clutter       | Progressive disclosure          |

---

## 🚀 Future Extensions

* Map integration
* Hotel & restaurant links
* Multi-city trips
* Collaborative planning
* Export itineraries to PDF

---

## 💎 Project Value

* Strong frontend showcase
* Real-world AI application
* Clean, scalable backend architecture
* Startup-ready MVP foundation

---

## 📌 Status

🟡 **In active development (MVP stage)**
