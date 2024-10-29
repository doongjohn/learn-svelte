<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import { counter } from '$lib/spa.svelte';
</script>

<Title text="Yay"></Title>
<div class="counter">Counter: {counter.num}</div>

<style>
	.counter {
		font-size: 2rem;
	}
</style>
