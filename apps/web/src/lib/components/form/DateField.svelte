<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  export let label: string = '';
  export let id: string = '';
  export let name: string = '';
  export let value: string = '';
  const dispatch = createEventDispatcher();

  onMount(() => {
    if (!id) id = `date-${Math.random().toString(36).slice(2,9)}`;
  });

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    value = target.value;
    dispatch('input', { value });
  }
</script>

<section class="mb-6 text-black">
  <label for={id} class="block mb-2 font-medium">
    {label}
  </label>

  <input
    type="date"
    id={id}
    {name}
    bind:value
    class="mt-2 p-2 border rounded w-full"
    on:input={handleInput}
  />
</section>