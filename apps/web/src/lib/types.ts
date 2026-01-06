/*
currency types
location details
user input
activity
day planner
tripitinerary
RegenerationOptions
*/

// Currency Types
export type CurrencyCode = 'INR' | 'USD' | 'JPY' | 'MYR'

// Location Details
export interface Location {
    city: string;
    country: string;
}

// User input (pre-AI)
export interface TripCreationInput {
    destination: Location;

    startDate: string; // ISO date string
    endDate: string; // ISO date string

    numberOfPeople: number;
    budget: number; // user-provided total budget
    currency: CurrencyCode;
}

// Activity
export type ActivityCategory =
    | 'food'
    | 'sightseeing'
    | 'travel'
    | 'experience'
    | 'free-time';

export interface Activity{
    id: string; // UUID
    title: string;
    description?: string;
    category?: ActivityCategory;
    estimatedCost?: number; // per activity, per person
}

// Day Planner
export interface DayPlan{
    dayNumber: number;
    summary?: string;
    activities: Activity[];
    dailyBudgetEstimate?: number; // per day, total (all people)
}

// TripItinerary - Ai Output
export interface TripItinerary{
    id: string; // UUID

    destination: Location;

    startDate: string; // ISO date string
    endDate: string; // ISO date string
    numberOfDays: number;

    currency: CurrencyCode;
    totalBudget?: number; // AI-allocated total budget

    numberOfPeople: number;

    days: DayPlan[];

    createdAt: string;
    updatedAt: string;

}

export interface RegenerationOptions {
    itineraryId: string;
    dayNumber: number;
    reason?: string;
}