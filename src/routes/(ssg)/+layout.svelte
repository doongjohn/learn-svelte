<script>
  import { base } from '$app/paths'

	let { children } = $props()
</script>

<nav>
	<ul>
		<li><a data-sveltekit-reload href="{base}/">home</a></li>
		<li><a data-sveltekit-reload href="{base}/about">about</a></li>
		<li><a data-sveltekit-reload href="{base}/hello">hello</a></li>
		<li><a data-sveltekit-reload href="{base}/spa">spa</a></li>
	</ul>
</nav>
{@render children()}
