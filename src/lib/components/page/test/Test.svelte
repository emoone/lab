<script lang="ts">
  import Item from './Item.svelte';

  const ITEMS = [
    {
      id: 1,
      title: 'Item 1',
      content: 'Content 1',
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'Content 2',
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'Content 3',
    },
  ];
</script>

<main class="flex flex-col gap-4">
  <h1>Test Page</h1>

  {#each ITEMS as item (item.id)}
    <Item {item} />
  {/each}
  <div>Other content</div>
</main>
