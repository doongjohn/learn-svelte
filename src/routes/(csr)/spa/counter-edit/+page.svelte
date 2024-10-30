<script lang="ts">
  import Title from '$lib/components/Title.svelte'
  import { counter } from '$lib/counter.svelte'

  const counterAdd = () => ++counter.num
  const counterSub = () => --counter.num
</script>

<main>
  <Title text="Counter edit"></Title>
  <p class="counter">Counter: {counter.num}</p>
  <button onclick={counterAdd}>+</button>
  <button onclick={counterSub}>-</button>
</main>

<style>
  button {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }
</style>
