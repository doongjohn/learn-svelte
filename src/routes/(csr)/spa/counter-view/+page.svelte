<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import { counter } from '$lib/spa.svelte'
</script>

<main>
	<Title text="Counter view"></Title>
	<div class="counter">Counter: {counter.num}</div>
</main>

<style>
	.counter {
		font-size: 2rem;
	}
</style>
