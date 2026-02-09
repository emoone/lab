<script lang="ts">
  import { cn } from '$lib/utils/twUtils';
  import { animate } from 'motion';

  type navItemType = {
    label: string;
    value: string;
  };
  const navigationItems: navItemType[] = Array.from(
    { length: 10 },
    (_, index) => ({
      label: `Item ${index + 1}`,
      value: `item-${index + 1}`,
    }),
  );

  let selected = $state('item-1');
  let indicator: HTMLDivElement;
  let navContainer: HTMLUListElement;

  function handleSelect(value: string) {
    selected = value;

    // 선택된 버튼 요소 찾기
    const selectedButton = navContainer.querySelector(
      `[data-value="${value}"]`,
    ) as HTMLElement;
    if (!selectedButton || !indicator) return;

    const containerRect = navContainer.getBoundingClientRect();
    const buttonRect = selectedButton.getBoundingClientRect();
    const preferResucedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    // indicator를 선택된 버튼 위치로 이동
    const offsetX = buttonRect.left - containerRect.left;
    if (preferResucedMotion) {
      indicator.style.transform = `translateX(${offsetX}px)`;
      indicator.style.width = `${buttonRect.width}px`;
    } else {
      animate(
        indicator,
        {
          x: offsetX,
          width: `${buttonRect.width}px`,
        },
        { type: 'spring', stiffness: 300, damping: 25 },
      );
    }
  }

  // 초기 위치 설정
  function initIndicator(node: HTMLDivElement) {
    indicator = node;
    // DOM 렌더링 후 초기 위치 설정
    requestAnimationFrame(() => handleSelect(selected));
  }
</script>

<section>
  <h1>Navigation Demo Page</h1>
  <p>
    해당 페이지에서 Bits UI 의 Navigation과 Motion One 기능을 테스트 및 학습하기
    위한 페이지
  </p>

  <nav class="mt-6 w-full">
    <p class="mb-3 text-sm text-gray-500">선택: {selected}</p>

    <div class="relative">
      <!-- 이동하는 배경 인디케이터 -->
      <div
        use:initIndicator
        class="absolute top-0 left-0 h-full rounded-md bg-blue-100 transition-all"
        style="width: 0px;"
      ></div>

      <!-- 메뉴 아이템 -->
      <ul
        bind:this={navContainer}
        class="relative flex items-center gap-1 whitespace-nowrap"
      >
        {#each navigationItems as item}
          <li class="flex-1 text-center">
            <button
              data-value={item.value}
              class={cn('relative z-10 w-full rounded-md px-3 py-2 text-sm')}
              onclick={() => handleSelect(item.value)}
            >
              {item.label}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>
