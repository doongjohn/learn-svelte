<script>
  import '@picocss/pico'

  let { children } = $props()
</script>

<div class="container">
  {@render children()}
</div>
