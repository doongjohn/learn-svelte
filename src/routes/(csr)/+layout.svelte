<script>
	let { children } = $props()
</script>

<nav>
	<ul>
		<li><a href="/">home</a></li>
		<li><a href="/spa/counter-edit">counter edit</a></li>
		<li><a href="/spa/counter-view">counter view</a></li>
	</ul>
</nav>

{@render children()}
