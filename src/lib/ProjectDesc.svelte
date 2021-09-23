<script lang="ts">
  import Icon from '../lib/Icon.svelte';
  import { getLogoUrl } from '../utils';

  export let id: string;
  export let name: string;
  export let year: number;
  export let summary: string;
  export let detail: string[];
  export let tags: string[];
  export let live: string = undefined;
  export let git: string = undefined;

  const logo1x = getLogoUrl(id);
  const logo2x = getLogoUrl(id, 2);
</script>

<section class="project-desc">
  <div class="about">
    <h1 class="title">{name}</h1>

    <p class="description">{summary}</p>

    {#each detail as paragraph}
      <p class="description">{paragraph}</p>
    {/each}

    {#if live}
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <Icon name="globe-alt" />

        Watch website live
      </a>
    {/if}

    {#if git}
      <a
        href={git}
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <Icon name="github-circled" />

        View code on GitHub
      </a>
    {/if}
  </div>

  <div class="aside">
    <img
      src={logo1x}
      srcset={`${logo1x} 1x, ${logo2x} 1.5x`}
      alt={name}
      class="logo"
    >

    <div class="year">{year}</div>
    
    <ul class="technology">
      {#each tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
</section>

<style lang="stylus">
  .project-desc
    display flex
    height 100%

    @media (max-width: 576px)
      flex-direction column

    .about
      flex 1 1 auto

      .title
        position relative
        font-size 2.4rem
        line-height 1
        font-weight 800
        margin 0 0 1rem 0
        padding 0 0 1.5rem 0
        white-space nowrap

        &:after
          content ''
          position absolute
          bottom 0
          left 0
          width 8rem
          height 0.4rem
          background var(--color-text)

      .description
        margin 1rem 0 0 0

      .button
        margin 2rem 0 0 0

      .button + .button
        margin-left 1rem

    .aside
      flex 0 0 15rem
      text-align right
      padding-left 3rem

      @media (max-width: 576px)
        flex 1 1 auto
        text-align left
        padding-left 0

      .logo
        width auto
        max-width 10rem
        height auto
        max-height 7.5rem

        @media (max-width: 576px)
          display none

      .year
        font-size 2.2rem
        font-weight 800
        line-height 1
        margin 1rem 0

        @media (max-width: 576px)
          display none

      .technology
        display flex
        flex-wrap wrap
        justify-content flex-end
        list-style none
        margin 0 -0.5rem
        padding 0

        @media (max-width: 576px)
          margin-top 2rem
          justify-content flex-start

        li
          font-size 1.2rem
          font-weight 600
          margin 0.5rem
          padding 0.25rem 1rem
          border-radius 0.2rem
          background var(--color-bg)
</style>
