<script lang="ts">
	import Title from 'components/Title.svelte';
	import { counter } from '../spa.svelte';
</script>

<Title text="Wow"></Title>
<div class="counter">Counter: {counter.num}</div>
<button
	onclick={() => {
		counter.num++;
	}}>+</button
>
<button
	onclick={() => {
		counter.num--;
	}}>-</button
>

<style>
	button {
		width: 4rem;
		height: 1.5rem;
	}

  .counter {
    font-size: 2rem;
  }
</style>
