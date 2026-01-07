/*
Purpose:

This is your AI contract.
“If the AI response doesn’t match this, it’s invalid.”


Define what the AI is allowed to return
keep it close to TripIntinerary

Why?
LLMs lie.
You need a defensive boundary.

What goes in this file:
A JSON-like schema or TypeScript interface used only for AI
No optional fields unless absolutely needed
No frontend concerns
You are not implementing AI yet — just defining the contract.
*/

// AI-only schema (stricter)

// AI-only schema (stricter than TripItinerary)
export interface AIItinerary {
  destination: {
    city: string;
    country: string;
  };

  currency: CurrencyCode;

  totalBudget: number;

  days: AIDay[];
}

export interface AIDay {
  dayNumber: number;
  summary: string;
  activities: AIActivity[];
  dailyBudget: number;
}

export interface AIActivity {
  title: string;
  category: ActivityCategory;
  estimatedCost: number;
}
// RULES:
// - totalBudget ≈ sum of dailyBudget
// - dailyBudget ≈ sum of activity costs
// - estimatedCost is per person
// - No empty days
