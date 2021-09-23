<script lang="ts">
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  const menu = [
    { href: '/', name: 'About' },
    { href: '/experience', name: 'Experience' },
    { href: '/works', name: 'Works' },
    { href: '/contact', name: 'Contact' },
  ];
</script>

<div class="nav">
  <ul>
    {#each menu as { href, name } (href)}
      <li>
        <a
          {href}
          class:active={false}
          use:link
          use:active
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="stylus">
  .nav
    padding 0 3rem

    @media (max-width: 767px)
      position sticky
      top 0
      z-index 1
      padding 1rem 0
      background var(--color-bg)

    ul
      display flex
      list-style none
      padding 0
      margin 0

      @media (max-width: 767px)
        justify-content center

      li
        flex 0 0 auto

        a
          display block
          padding 0.5rem 1rem
          text-transform uppercase
          text-decoration none
          font-size 1.5rem
          font-weight 800
          color var(--color-muted)
          border 0

          @media (max-width: 767px)
            padding 1rem
            font-size 1.6rem

          &:hover
            color var(--color-hover)

          &.active
          &.active:hover
            color var(--color-text)
            cursor default
</style>
