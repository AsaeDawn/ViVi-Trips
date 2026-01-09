<script lang="ts">
  import { theme } from '$lib/stores/theme';
  export let lightSrc: string;
  export let darkSrc: string;
</script>

<div
  class="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
  style="
    background-image: url({
      $theme === 'dark' ? darkSrc : lightSrc
    });
  "
></div>

