<script lang="ts">
  import Title from '$lib/components/Title.svelte'
</script>

<main>
  <hgroup>
    <Title text="Home page"></Title>
    <p>This website is built with SvelteKit and can be hosted via static web server.</p>
  </hgroup>
  <ul>
    <li><code>/</code>, <code>/about</code>, <code>/hello</code> are static HTML without js.</li>
  </ul>
  <ul>
    <li>
      To generate static HTML, use <code>adapter-static</code> and set <code>csr = false</code> and
      <code>prerender = true</code>
      in the <code>+page.ts</code> or <code>+layout.ts</code>.
    </li>
  </ul>
</main>
