<script lang="ts">
  import ToggleOption from './ToggleOption.svelte';

  export let label: string;
  export let name: string;
  export let type: 'checkbox' | 'radio' = 'checkbox';
  export let options: { value: string; label: string }[];
</script>

<fieldset class="mb-6">
  <legend class="block mb-3 font-medium">
    {label}
  </legend>

  <div class="flex flex-wrap gap-3">
    {#each options as option}
      <ToggleOption
        {type}
        {name}
        value={option.value}
      >
        {option.label}
      </ToggleOption>
    {/each}
  </div>
</fieldset>
