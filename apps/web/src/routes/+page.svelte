<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';
</script>


<Background
  lightSrc="/landing/bg_logo_light.jpg"
  darkSrc="/landing/bg_logo_dark.jpg"
/>

<ThemeToggle />

<!-- Info Panel -->
<section class="fixed right-16 top-1/2 -translate-y-1/2 z-10 max-w-md">
  <!-- your text -->
</section>


<slot />

  <button on:click={() => goto('/plan')}>
    Let’s Travel
  </button>

