<script lang="ts">
  import 'normalize.css';
  import '@fontsource/catamaran/variable.css';
  import Router from 'svelte-spa-router';

  import Sidebar from './lib/Sidebar.svelte';
  import Nav from './lib/Nav.svelte';

  import About from './pages/About.svelte';
  import Experience from './pages/Experience.svelte';
  import Works from './pages/Works.svelte';
  import Project from './pages/Project.svelte';
  import Contact from './pages/Contact.svelte';
  import Page404 from './pages/Page404.svelte';

  const routes = {
    '/': About,
    '/experience': Experience,
    '/works': Works,
    '/project/:id': Project,
    '/contact': Contact,
    '*': Page404,
  };

  function onRouteChange(e: CustomEvent) {
    document.getElementById('content').scrollTop = 0;
  }
</script>

<Sidebar />

<div>
  <Nav />

  <main
    id="content"
    class="scrollbar"
  >
    <Router
      {routes}
      on:routeLoaded={onRouteChange}
    />
  </main>
</div>

<style lang="stylus">
  :root
    --color-text #fff
    --color-bg #444
    --color-content-bg #222
    --color-muted #777
    --color-hover gold
    font-family CatamaranVariable, sans-serif
    background #539dff 100% 100% no-repeat
    background-image embedurl('./assets/background.svg', "utf8")
    background-position center
    background-size cover
    background-attachment fixed
    font-size 10px
    height 100%

    @media (max-width: 1199px)
      font-size 8.33333333px

    @media (max-width: 991px)
      font-size 6.66666666px

    @media (max-width: 767px)
      font-size 8.33333333px
      background var(--color-content-bg)

  :root
  :global(body)
    margin: 0
    padding 0
    width 100%

  :global(body)
    color var(--color-text)
    position relative
    scroll-behavior smooth
    text-rendering optimizeSpeed
    display flex
    align-items center
    justify-content center
    min-height 100%

    @media (max-width: 767px)
      align-items flex-start
      justify-content flex-start

  :global(a)
    display inline-block
    color var(--color-text)
    transition color 0.2s linear, border-color 0.2s linear
    text-decoration none
    border-bottom 1px dashed

    &:hover
      color var(--color-hover)

  :global(#app)
    display flex
    height 80vh
    min-height 50rem
    width 110rem
    margin 5rem auto
    font-size 1.6rem
    line-height 1.5
    border-radius 3rem
    background var(--color-bg)
    box-shadow 0 0 10rem -1rem rgba(0, 0, 0, 0.25)

    @media (max-width: 767px)
      display block
      box-shadow none
      border-radius 0
      flex-direction column
      width 100%
      height auto
      margin 0 0 4rem 0
      background var(--color-content-bg)

  :global(.scrollbar)
    scrollbar-width thin
    scrollbar-color rgba(255, 255, 255, 0.25) #333

    &::-webkit-scrollbar
      background-color var(--color-content-bg)
      width 6px
      height 6px
      border-radius 6px

    &::-webkit-scrollbar-thumb
      border-radius 6px
      background-color rgba(255, 255, 255, 0.25)

    &::-webkit-scrollbar-corner
      color transparent

  :global(.table)
    display grid
    grid-template-columns repeat(4, 1fr)
    column-gap 2rem
    row-gap 2rem

    @media (max-width: 576px)
      grid-template-columns repeat(2, 1fr)

    @media (max-width: 360px)
      grid-template-columns 1fr

  :global(button)
  :global(.button)
    display inline-flex
    font-size 1.4rem
    line-height 1.8rem
    font-weight 600
    background var(--color-bg)
    border 0.2rem solid var(--color-text)
    border-radius 2rem
    padding 0.7rem 1.5rem
    text-decoration none
    box-shadow 0px 10px 10px -8px rgba(0, 0, 0, 0.75)
    transition color 0.2s linear, background-color 0.2s linear

    &:hover
    &:active
      background var(--color-content-bg)

    &:active
      box-shadow none
      position relative
      top 1px

    :global(i)
      font-size 1.8rem
      margin-right 0.5rem

  div
    flex 1 1 auto
    display flex
    flex-direction column
    width 100%
    background var(--color-content-bg)
    padding 3rem 0
    border-radius 0 3rem 3rem 0

    @media (max-width: 767px)
      border-radius 0
      padding-top 0

  main
    width 100%
    height 100%
    max-height 100%
    overflow auto scroll
    padding 0 4rem
    margin 2rem 0 0 0
    box-sizing border-box
    position relative
</style>
