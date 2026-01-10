<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';

  import TextField from '$lib/components/form/TextField.svelte';
  import DateField from '$lib/components/form/DateField.svelte';
  import ToggleGroup from '$lib/components/form/ToggleGroup.svelte';

  // step control
  let step = 0;

  // form state
  let destination = '';
  let travelStart = '';
  let travelEnd = '';
  let activities: string[] = [];
  let budget = '';
  let pace = '';

  function next() {
    step += 1;
  }

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

<header class="flex justify-between items-center border border-black p-4">
  <button>Login / Sign Up</button>
  <ThemeToggle />
</header>

<main class="min-h-screen flex items-center justify-center text-black">
  <div class="w-full max-w-xl text-center px-4">
    <p class="text-sm opacity-60 mb-4">
      Question {step + 1} of 6
    </p>

    <h1 class="text-2xl font-bold mb-8">Plan Your Trip</h1>

    {#if step === 0}
      <div in:fade>
        <TextField
          label="Where do you want to travel?"
          placeholder="e.g. Paris"
          bind:value={destination}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={!destination}
          on:click={next}
        >
          Next →
        </button>
      </div>
    {/if}

    {#if step === 1}
      <div in:fade>
        <DateField
          label="When do you want to start traveling?"
          bind:value={travelStart}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={!travelStart}
          on:click={next}
        >
          Next →
        </button>
      </div>
    {/if}

    {#if step === 2}
      <div in:fade>
        <DateField
          label="When does your trip end?"
          bind:value={travelEnd}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={!travelEnd}
          on:click={next}
        >
          Next →
        </button>
      </div>
    {/if}

    {#if step === 3}
      <div in:fade>
        <ToggleGroup
          label="What activities do you enjoy?"
          options={activityOptions}
          bind:value={activities}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={activities.length === 0}
          on:click={next}
        >
          Next →
        </button>
      </div>
    {/if}

    {#if step === 4}
      <div in:fade>
        <ToggleGroup
          label="What is your estimated budget?"
          type="radio"
          options={budgetOptions}
          bind:value={budget}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={!budget}
          on:click={next}
        >
          Next →
        </button>
      </div>
    {/if}

    {#if step === 5}
      <div in:fade>
        <ToggleGroup
          label="Pick your travel pace"
          type="radio"
          options={paceOptions}
          bind:value={pace}
        />

        <button
          class="mt-6 border border-black px-6 py-2"
          disabled={!pace}
          on:click={() => goto('/')}
        >
          Finish →
        </button>
      </div>
    {/if}
  </div>
</main>
