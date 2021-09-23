<script lang="ts">
  import selectedTag from '../stores/selectedTag';

  export let tag: string;

  $: selected = $selectedTag === tag;

  function onSelectTag() {
    selectedTag.set(tag);
  }
</script>

<li
  class="tag"
  class:selected
  on:click={onSelectTag}
>
  {tag}
</li>

<style lang="stylus">
  .tag
    padding 0.5rem
    color var(--color-muted)
    cursor pointer
    transition color 0.2s linear

    &:hover
      color var(--color-hover)

    &.selected
    &.selected:hover
      color var(--color-text)
      cursor default
</style>
