<script lang="ts">
  import { page } from '$app/state';

  interface Props {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    noindex?: boolean;
  }

  const {
    title = 'Lab',
    description = 'Frontend Developer Portfolio',
    image = '/og-image.png',
    type = 'website',
    noindex = false,
  }: Props = $props();

  const siteName = 'Lab';
  const siteUrl = 'https://lab-kappa-nine.vercel.app/';

  const fullTitle = $derived(
    title === siteName ? title : `${title} | ${siteName}`,
  );
  const canonicalUrl = $derived(`${siteUrl}${page.url.pathname}`);
  const imageUrl = $derived(
    image.startsWith('http') ? image : `${siteUrl}${image}`,
  );
</script>

<svelte:head>
  <!-- 기본 메타 태그 -->
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={imageUrl} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
</svelte:head>
