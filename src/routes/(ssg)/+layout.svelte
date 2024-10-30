<script>
	let { children } = $props()
</script>

<nav>
	<ul>
		<li><a href="/">home</a></li>
		<li><a href="/about">about</a></li>
		<li><a href="/hello">hello</a></li>
		<li><a href="/spa">spa</a></li>
	</ul>
</nav>
{@render children()}
