<script>
  import { base } from '$app/paths'

  let { children } = $props()
</script>

<nav>
  <ul>
    <li><a data-sveltekit-reload href="{base}/">home</a></li>
    <li><a href="{base}/spa/counter-edit">counter edit</a></li>
    <li><a href="{base}/spa/counter-view">counter view</a></li>
  </ul>
</nav>

{@render children()}
