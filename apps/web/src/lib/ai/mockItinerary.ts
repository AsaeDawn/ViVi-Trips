/*

Purpose:

A realistic fake AI so you can build everything else safely.


Why?

Lets you build UI + flows without AI cost

Helps you validate your schema

Forces you to confront edge cases early

This mock should:

Conform to TripItinerary

Be realistic (costs add up, days make sense)
*/

export const mockItinerary: TripItinerary = {
  id: 'uuid',
  destination: { city: 'Kyoto', country: 'Japan' },
  startDate: '2026-03-10',
  endDate: '2026-03-14',
  numberOfDays: 5,
  currency: 'JPY',
  totalBudget: 120000,
  numberOfPeople: 2,
  days: [
    {
      dayNumber: 1,
      summary: 'Arrival and local exploration',
      activities: [
        { title: 'Hotel check-in', category: 'travel', estimatedCost: 0 },
        { title: 'Gion walk', category: 'sightseeing', estimatedCost: 0 },
        { title: 'Local ramen dinner', category: 'food', estimatedCost: 1500 }
      ],
      dailyBudgetEstimate: 6000
    }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
