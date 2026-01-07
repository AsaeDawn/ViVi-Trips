/*

Purpose:

Convert user intent into clear instructions for the AI.


Responsibilities:
Input: TripCreationInput
Output: string prompt
No API calls
No OpenAI logic

This function should:

Inject constraints:
number of days
total budget
currency
number of people

Force structure:
day-by-day
activities with costs

Explicitly say:
“Return valid JSON only”
“Match this schema”

This file becomes the heart of your product.
*/

export function buildItineraryPrompt(
  input: TripCreationInput
): string
// You are a professional travel planner creating realistic itineraries.
// Destination: Kyoto, Japan
// Dates: 2026-03-10 to 2026-03-14 (5 days)
// People: 2
// Total Budget: 120000 JPY
// Rules:
// - Stay within total budget
// - Costs are per person
// - Each day must have 3–6 activities
// - Balance sightseeing and rest
// Return ONLY valid JSON in this format:
// { ...schema pasted here... }
