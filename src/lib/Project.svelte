<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { getLogoUrl } from '../utils';

  import Icon from './Icon.svelte';

  export let id: string;
  export let name: string;
  export let year: number;
  export let summary: string;
  export let live: boolean = false;
  export let git: boolean = false;

  $: href = `/project/${id}`;
  $: logo1x = getLogoUrl(id);
  $: logo2x = getLogoUrl(id, 2);
</script>

<a
  {href}
  class="project"
  use:link
>
  <img
    src={logo1x}
    srcset={`${logo1x} 1x, ${logo2x} 1.5x`}
    alt={name}
    class="logo"
  >
  
  {#if live}
    <span class="live">
      <Icon name="globe-alt" />

      <strong>watch live</strong>
    </span>
  {:else if git}
    <span class="git">
      <Icon name="github-circled" />

      <strong>github code</strong>
    </span>
  {/if}

  <h3 class="name">{name}</h3>

  <span class="year">{year}</span>

  <div class="summary">
    <p>{summary}</p>
  </div>
</a>

<style lang="stylus">
  .project
    display block
    border 0
    position relative
    width 100%
    min-height 16rem
    background-color var(--color-bg)
    border-radius 1rem 0 1rem 0
    overflow hidden

    .logo
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      margin-top -1rem
      width auto
      max-width 10rem
      height auto
      max-height 7.5rem

    .live
    .git
      position absolute
      left -4rem
      top -1.5rem
      display flex
      flex-direction column
      font-size 1.2rem
      transform rotate(-45deg)
      padding 2rem 0 0.2rem
      text-align center
      width 10rem

      strong
        font-size 0.8rem
        line-height 1
        text-transform uppercase
        font-weight 800
        margin-top 0.8rem

    .live
      background #39a063

    .git
      background #4b8dc7

    .name
      position absolute
      bottom 0
      left 0
      right 0
      background rgba(0, 0, 0, 0.33)
      font-size 1.4rem
      height 3rem
      line-height 3rem
      margin 0
      padding 0 1.5rem
      border-radius 0 0 1rem 0
      z-index 1
      transition background 0.2s linear

    .year
      position absolute
      right 1rem
      top 1rem
      font-size 1.25rem
      font-weight 800
      line-height 1
      z-index 1

    .summary
      opacity 0
      font-size 1.4rem
      line-height 1.5
      position absolute
      top 0
      bottom 3rem
      left 0
      right 0
      padding 3rem 1.5rem 0
      background rgba(0, 0, 0, 0.45)
      transition opacity 0.2s linear

      p
        margin 0
        width 100%
        position relative
        left 2rem
        transition left 0.15s linear

    &:hover
      color var(----color-text)

      .logo
        opacity 0.15

      .git
      .live
        opacity 0.3

      .summary
        opacity 1

        p
          left 0

      .name
        background  rgba(0, 0, 0, 0.45)
</style>
