<script lang="ts">
  import '../fontello/icons.css';

  export let name: string;

  $: iconClassName = `icon-${name}`;
</script>

<i class={iconClassName} />

<style lang="stylus">
  i
    display inline-flex
    align-items center
    justify-content center
</style>
