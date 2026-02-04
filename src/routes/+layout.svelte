<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import '../lib/styles/global.css';
  import '../lib/styles/layout.css';
  import { Header } from '$lib/components/container/header';
  const { children } = $props();
</script>

<Header />
<main class="mx-auto max-w-4xl px-4 py-8">
  {@render children()}
</main>
<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>
      {locale}
    </a>
  {/each}
</div>
