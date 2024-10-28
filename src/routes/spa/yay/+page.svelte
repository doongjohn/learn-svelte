<script lang="ts">
	import Title from 'components/Title.svelte';
	import { counter } from '../spa.svelte';
</script>

<Title text="Yay"></Title>
<div class="counter">Counter: {counter.num}</div>

<style>
	.counter {
		font-size: 2rem;
	}
</style>
