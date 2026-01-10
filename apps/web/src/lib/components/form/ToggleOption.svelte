<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: string;
  export let name: string = '';
  export let type: 'checkbox' | 'radio' = 'checkbox';
  export let disabled: boolean = false;
  export let group: any;
  const dispatch = createEventDispatcher();

  // derive checked state from `group`
  let isChecked = false;
  $: isChecked =
    type === 'checkbox'
      ? Array.isArray(group) && group.includes(value)
      : group === value;

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    let out: any;

    if (type === 'checkbox') {
      if (target.checked) {
        out = Array.isArray(group) ? [...group, value] : [value];
      } else {
        out = Array.isArray(group) ? group.filter((v: string) => v !== value) : [];
      }
    } else {
      // radio
      out = value;
    }

    // update local view and notify parent/bindings
    group = out;
    dispatch('change', event);
    dispatch('group', out);
  }
</script>

<label class="cursor-pointer">
  {#if type === 'checkbox'}
    <input
      type="checkbox"
      value={value}
      {name}
      {disabled}
      checked={isChecked}
      class="peer sr-only"
      on:change={handleChange}
    />
  {:else}
    <input
      type="radio"
      value={value}
      {name}
      {disabled}
      checked={isChecked}
      class="peer sr-only"
      on:change={handleChange}
    />
  {/if}

  <span
    class="
      inline-flex items-center gap-2
      px-4 py-2 border rounded
      transition
      peer-checked:bg-black peer-checked:text-white peer-checked:border-black
      peer-disabled:opacity-40 peer-disabled:cursor-not-allowed
    "
    aria-hidden="true"
  >
    <slot />
  </span>
</label>
