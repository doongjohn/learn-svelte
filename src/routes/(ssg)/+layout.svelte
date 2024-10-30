<script>
	let { children } = $props()
</script>

<nav>
	<ul>
		<li><a data-sveltekit-reload href="/">home</a></li>
		<li><a data-sveltekit-reload href="/about">about</a></li>
		<li><a data-sveltekit-reload href="/hello">hello</a></li>
		<li><a data-sveltekit-reload href="/spa">spa</a></li>
	</ul>
</nav>
{@render children()}
