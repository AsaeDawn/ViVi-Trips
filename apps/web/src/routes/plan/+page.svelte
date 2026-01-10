<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';

  import TextField from '$lib/components/form/TextField.svelte';
  import DateField from '$lib/components/form/DateField.svelte';
  import ToggleGroup from '$lib/components/form/ToggleGroup.svelte';

  const activityOptions = [
    { value: 'food', label: '🍔 Food' },
    { value: 'nature', label: '🌿 Nature' },
    { value: 'culture', label: '🏛️ Culture' },
    { value: 'shopping', label: '🛍️ Shopping' },
    { value: 'nightlife', label: '🌃 Nightlife' }
  ];

  const budgetOptions = [
    { value: 'low', label: '💸 Low — 50–100$' },
    { value: 'medium', label: '💰 Medium — 150–250$' },
    { value: 'high', label: '🤑 High — 250$+' }
  ];

  const paceOptions = [
    { value: 'relaxed', label: '🧘 Relaxed — 1–2/day' },
    { value: 'moderate', label: '🚶 Moderate — 3–5/day' },
    { value: 'fast', label: '🏃 Fast — 5+/day' }
  ];
</script>

<Background
  lightSrc="/landing/candle.jpg"
  darkSrc="/landing/temp_d.jpg"
/>

<main class="relative z-10 text-white">
  <header class="flex justify-between items-center border border-white p-4">
    <button>Login / Sign Up</button>
    <ThemeToggle />
  </header>

  <h1 class="text-2xl font-bold mb-6">Plan Your Trip</h1>

  <TextField
    label="Question 1: Where do you want to travel to?"
    id="destination"
    name="destination"
    placeholder="e.g. Paris"
  />

  <DateField
    label="Question 2: When do you want to start traveling?"
    id="travel_start"
    name="travel_start"
  />

  <DateField
    label="Question 3: Till when (end date)?"
    id="travel_end"
    name="travel_end"
  />

  <ToggleGroup
    label="Question 4: What activities are you fond of?"
    name="activities[]"
    options={activityOptions}
  />

  <ToggleGroup
    label="Question 5: What is your estimated budget?"
    name="budget"
    type="radio"
    options={budgetOptions}
  />

  <ToggleGroup
    label="Question 6: Pick your travel pace"
    name="pace"
    type="radio"
    options={paceOptions}
  />

  <button
    on:click={() => goto('/')}
    class="fixed bottom-6 right-6 border border-white px-4 py-2"
  >
    Back
  </button>
</main>
