<script lang="ts">
  import { theme } from '$lib/stores/theme';

  function toggle() {
    theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }
</script>

<button
  on:click={toggle}
  class="fixed top-6 right-6 z-50
         rounded-full p-3
         bg-black/20 dark:bg-white/20
         backdrop-blur
         hover:scale-105 transition"
>
  {#if $theme === 'dark'}
    🌙
  {:else}
    ☀️
  {/if}
</button>
