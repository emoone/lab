<script lang="ts">
  const experiments = [
    {
      title: 'Resume',
      description: '이력서 페이지 - Svelte 5 + Tailwind CSS',
      href: '/resume',
      tags: ['Svelte 5', 'Tailwind'],
    },
    {
      title: 'Paraglide',
      description: 'i18n 다국어 지원 테스트',
      href: '/demo/paraglide',
      tags: ['i18n', 'Paraglide'],
    },
    {
      title: 'Build Tools',
      description: 'Vite, tsdown, ESBuild, Webpack, SWC, Babel 빌드 도구 비교 가이드',
      href: '/build-tools',
      tags: ['Vite', 'ESBuild', 'Webpack', 'SWC'],
    },
  ];

  const techStack = [
    'SvelteKit',
    'Svelte 5',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
  ];
</script>

<!-- Hero -->
<section class="py-12 text-center">
  <h1 class="mb-4 text-4xl font-bold text-gray-900">
    <span class="text-blue-600">Moon's Lab</span>
  </h1>
  <p class="text-lg text-gray-600">
    다양한 기술을 실험하고 학습하는 공간입니다.
  </p>
</section>

<!-- Tech Stack -->
<section class="py-8">
  <div class="flex flex-wrap justify-center gap-2">
    {#each techStack as tech, index}
      <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
        {tech}
      </span>
    {/each}
  </div>
</section>

<!-- Experiments -->
<section class="py-8">
  <h2 class="mb-6 text-xl font-semibold text-gray-900">Experiments</h2>
  <div class="grid gap-4 sm:grid-cols-2">
    {#each experiments as item}
      <a
        href={item.href}
        class="group rounded-lg border border-gray-200 p-5 transition-all hover:border-blue-300 hover:shadow-md"
      >
        <h3 class="mb-2 font-semibold text-gray-900 group-hover:text-blue-600">
          {item.title}
        </h3>
        <p class="mb-3 text-sm text-gray-600">{item.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each item.tags as tag}
            <span class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
              {tag}
            </span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>
