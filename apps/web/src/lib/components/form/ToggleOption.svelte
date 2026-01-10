<script lang="ts">
  export let value: string;
  export let name: string;
  export let type: 'checkbox' | 'radio' = 'checkbox';
  export let disabled = false;
</script>

<label class="cursor-pointer">
  <input
    {type}
    {value}
    {name}
    {disabled}
    class="peer hidden"
  />

  <span
    class="
      inline-flex items-center gap-2
      px-4 py-2 border rounded
      transition
      peer-checked:bg-black peer-checked:text-white peer-checked:border-black
      peer-disabled:opacity-40 peer-disabled:cursor-not-allowed
    "
  >
    <slot />
  </span>
</label>
