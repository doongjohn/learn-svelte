<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import { counter } from '$lib/spa.svelte'

	const counterAdd = () => {
		++counter.num
	}
	const counterSub = () => {
		--counter.num
	}
</script>

<main>
	<Title text="Counter edit"></Title>
	<div class="counter">Counter: {counter.num}</div>
	<button onclick={counterAdd}>+</button>
	<button onclick={counterSub}>-</button>
</main>

<style>
	.counter {
		font-size: 2rem;
	}
</style>
