<script lang="ts">
  import { page } from '$app/state';

  const menus = [
    { label: 'Home', href: '/' },
    { label: 'Resume', href: '/resume' },
    { label: 'Build Tools', href: '/build-tools' },
    { label: 'About', href: '/about' },
  ];

  function isActive(href: string): boolean {
    if (href === '/') {
      return page.url.pathname === '/';
    }
    return page.url.pathname.startsWith(href);
  }
</script>

<header class="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
  <nav class="container mx-auto flex h-16 items-center justify-between px-4">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
      Lab
    </a>

    <!-- Menu -->
    <ul class="flex items-center gap-1">
      {#each menus as menu}
        <li>
          <a
            href={menu.href}
            class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors
              {isActive(menu.href)
              ? 'text-blue-600'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
          >
            {menu.label}
            {#if isActive(menu.href)}
              <span
                class="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-600"
              ></span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
