<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { goto } from '$app/navigation';
</script>

<Background
  lightSrc="/landing/1temp_l.jpg"
  darkSrc="/landing/1temp_d.jpg"
/>


<main>

  <header class="flex space-y-6 text-black border border-black">
    <button>Login/SignUp</button>
    <ThemeToggle />
  </header>

  <h1>Plan Your Trip</h1>
  
  <!--  User Travel Planning Inputs -->

  <section class="mb-6">
    <label class="block mb-2 font-medium" for="destination">
      Question 1: Where do you want to travel to?
    </label>
    <input id="destination" name="destination" type="text" placeholder="e.g. Paris" class="mt-2 p-2 border rounded w-full" />
  </section>

  <section class="mb-6">
    <label class="block mb-2 font-medium" for="travel_start">
      Question 2: When do you want to start traveling?</label>
    <input id="travel_start" name="travel_start" type="date" class="mt-2 p-2 border rounded" />
  </section>

  <section class="mb-6">933218
    <label class="block mb-2 font-medium" for="travel_end">
      Question 3: Till when (end date)?</label>
    <input id="travel_end" name="travel_end" type="date" class="mt-2 p-2 border rounded" />
  </section>

  <section class="mb-6">
    <label class="block mb-2 font-medium" for="activities">
      Question 4: What activities are you fond of?</label>
    <input id="activities" name="activities" type="text" placeholder="e.g. hiking, museums" class="mt-2 p-2 border rounded w-full" />
  </section>

  <section class="mb-6">
    <label class="block mb-2 font-medium" for="budget">
      Question 5: What is your estimated budget?</label>
    <input id="budget" name="budget" type="number" placeholder="Amount in USD" class="mt-2 p-2 border rounded" />
  </section>

  <section class="mb-6">
    <label class="block mb-2 font-medium" for="pace">
      Question 6: Pick your travel pace</label>
    <select id="pace" name="pace" class="mt-2 p-2 border rounded">
      <option value="relaxed">Relaxed</option>
      <option value="moderate">Moderate</option>
      <option value="fast">Fast</option>
    </select>
  </section>

  <button 
    on:click={() => goto('/')}
    class="fixed top-1/2 left-1/2 z-10 max-w-md text-black border border-black"
  >
    back
  </button>



</main>