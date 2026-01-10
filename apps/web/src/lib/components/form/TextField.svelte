<script lang="ts">
  export let label: string;
  export let id: string;
  export let name: string;
  export let placeholder: string = '';
  export let type: string = 'text';
</script>

<section class="mb-6">
  <label for={id} class="block mb-2 font-medium">
    {label}
  </label>

  <input
    {id}
    {name}
    {type}
    {placeholder}
    class="mt-2 p-2 border rounded w-full"
  />
</section>
