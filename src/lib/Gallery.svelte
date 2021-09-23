<script context="module" lang="ts">
  import { tick } from 'svelte';
  import { crossfade, fade, fly, scale } from 'svelte/transition';

  import { movable } from '../actions';
  import { getScreenshotUrl, getThumbnailUrl } from '../utils';

  const [send, receive] = crossfade({
    duration: 300,
    fallback: scale,
  });
  const delay = (delay: number = 300) => new Promise(resolve => setTimeout(resolve, delay));
</script>

<script lang="ts">
  import type { WorkImage, GalleryImage } from '../types';

  import Icon from './Icon.svelte';
  import Preloader from './Preloader.svelte';
  import Screenshot from './Screenshot.svelte';

  export let id: string;          // project id
  export let images: WorkImage[]; // project images

  const gallery: GalleryImage[] = images.map(({ idx, alt }) => ({
    idx,
    alt,
    src: getScreenshotUrl(id, idx),
    thumb1x: getThumbnailUrl(id, idx),
    thumb2x: getThumbnailUrl(id, idx, 2),
  }));
  let loading: number = undefined;
  let loaded: GalleryImage = undefined;
  let previous: GalleryImage = undefined;
  let next: GalleryImage = undefined;

  async function onLoad(image: GalleryImage) {
    if (loading) return;
    loading = image.idx;
    
    await tick();
    await delay();

    const viewer = document.getElementById('viewer');
    viewer && viewer.scrollTo(0, 0);

    const img = new Image();
    img.onload = () => {
      loading = undefined;
      loaded = image;
      const index = gallery.findIndex(({ idx }) => idx === image.idx);
      previous = gallery[index - 1];
      next = gallery[index + 1];
      document.body.style.overflow = 'hidden';
    };
    img.onerror = () => {
      loading = undefined;
    };
    img.src = image.src;
  }

  function onUnload() {
    loading = undefined;
    loaded = undefined;
    document.body.style.overflow = null;
  }
</script>

<section class="gallery table">
  {#each gallery as image}
    {#if image !== loaded}
      <div
        in:receive|local={{ key: image.idx }}
        out:send|local={{ key: image.idx }}
      >
        <Screenshot
          {...image}
          {loading}
          on:zoom={() => onLoad(image)}
        />
      </div>
    {/if}
  {/each}
</section>

{#if loaded}
  {#await loaded then image}
    <div
      in:receive={{ key: image.idx }}
      out:send={{ key: image.idx }}
      class="viewer"
    >
      <div class="wrapper">
        {#if !loading}
          <div
            in:fly={{ y: -50 }}
            out:fade
            class="title"
          >
            {image.alt}
          </div>
        {:else}
          <div
            transition:fade={{ duration: 100 }}
            class="loading"
          >
            <span in:fly={{ x: 100 }}>Loading another screenshot...</span>

            <Preloader />
          </div>
        {/if}

        <div
          id="viewer"
          class="screenshot scrollbar"
          use:movable
        >
          <img
            src={image.src}
            alt={image.alt}
            draggable="false"
          >
        </div>

        <ul class="controls">
          <li
            on:click={() => previous && onLoad(previous)}
            class:disabled={loading || !previous}
          >
            <Icon name="angle-left" />
          </li>

          <li
            on:click={() => next && onLoad(next)}
            class:disabled={loading || !next}
          >
            <Icon name="angle-right" />
          </li>

          <li>
            <a
              href={image.src}
              rel="noopener noreferrer"
              target="_blank"
              class:disabled={loading}
            >
              <Icon name="link" />
            </a>
          </li>

          <li
            on:click={onUnload}
            class:disabled={loading}
          >
            <Icon name="cancel" />
          </li>
        </ul>
      </div>
    </div>
  {/await}
{/if}

<style lang="stylus">
  .viewer
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    margin 0
    padding 0
    background rgba(0, 0, 0, 0.75)
    z-index 1000
    display flex
    align-items center
    justify-content center
    padding 10vh 0

    @media (max-width: 767px)
      padding 0

    .wrapper
      position relative
      width 110rem
      height 100%
      border 3rem solid black
      padding-top 4rem
      border-radius 3rem
      box-sizing border-box
      background black

      @media (max-width: 767px)
        width 100%
        border-radius 0

      .title
        position absolute
        top -1rem
        left 0
        font-size 2rem
        line-height 2
        white-space nowrap
        margin 0
        padding 0

      .loading
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        display flex
        flex-direction column
        align-items center
        justify-content center
        background rgba(0, 0, 0, 0.9)

        span
          margin-bottom 3rem

      .controls
        position absolute
        display flex
        top -1rem
        right 0
        list-style none
        margin 0
        padding 0

        li
          display inline-flex
          font-size 2.5rem
          line-height 1
          width 4rem
          height 4rem
          align-items center
          justify-content center
          cursor pointer
          transition color 0.2s linear

          &:hover
            color var(--color-hover)

          a
          a:hover
            display inline-flex
            align-items center
            justify-content center
            font-size 1.8rem
            border 0
            background transparent

            :global(i)
              position relative
              top 2px

          &.disabled
          &.disabled:hover
          a.disabled
          a.disabled:hover
            cursor default
            color var(--color-muted)
            background rgba(0, 0, 0, 0.25)

      .screenshot
        display block
        width 100%
        height 100%
        font-size 0
        line-height 0
        box-sizing border-box
        overflow auto

        img
          width 100%
          height auto
          user-select none

          @media (max-width: 767px)
            width auto
</style>
