<script lang="ts">
    export let label: string;
    export let id: string;
    export let name: string;

</script>

<section class="mb-6 text-white white">
    
    <label for={id} class="block mb-2 font-medium">
        {label}
    </label>

    <input
        type="date"
        {id}
        {name}
        class="mt-2 p-2 border rounded"
    />
</section>