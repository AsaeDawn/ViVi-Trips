<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';
</script>

<Background
  lightSrc="/landing/candle.jpg"
  darkSrc="/landing/temp_d.jpg"
/>

<ThemeToggle />

<main class="min-h-screen flex items-center justify-center relative z-10">
  <div class="text-center space-y-6 text-white border border-white">
    <p class="text-lg border border-white ">
      An AI powered Travel Planner
    </p>

    <button
      on:click={() => goto('/plan')}
      class="px-6 py-3 rounded-lg bg-white/60 backdrop-blur"
    >
      Let’s Travel
    </button>
  </div>
</main>
