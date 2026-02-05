<script lang="ts">
  let { item } = $props();
  let expanded = $state(false);
</script>

<div>
  <button onclick={() => (expanded = !expanded)}>
    {expanded ? 'Collapse' : 'Expand'}
  </button>

  <div>Other content</div>
</div>
