<script lang="ts">
  import Title from '$lib/components/Title.svelte'
</script>

<main>
  <hgroup>
    <Title text="SPA"></Title>
    <p>Pages under route "spa" is rendered via client side routing.</p>
  </hgroup>
  <ul>
    <li>
      Client side routing is possible with static web server via fallback <code>404.html</code>.
    </li>
    <li>
      <code>404.html</code> contains js code for client side routing.
    </li>
    <li>
      To disable CSR for some links, you need to add <code>data-sveltekit-reload</code> to the
      <code>a</code> tag.
    </li>
  </ul>
</main>
