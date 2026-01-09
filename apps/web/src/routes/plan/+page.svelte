<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';
</script>

<Background
  lightSrc="/landing/1temp_l.jpg"
  darkSrc="/landing/1temp_d.jpg"
/>
<ThemeToggle />

<main>

  
  <button 
    on:click={() => goto('/')}
    class="fixed top-1/2 left-1/2 z-10 max-w-md text-black border border-black"
  >
    back
  </button>



</main>