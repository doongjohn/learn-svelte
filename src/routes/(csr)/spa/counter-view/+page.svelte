<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import { counter } from '$lib/counter.svelte'
</script>

<main>
  <Title text="Counter view"></Title>
  <p class="counter">Counter: {counter.num}</p>
</main>
