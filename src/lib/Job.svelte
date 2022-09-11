<script lang="ts">
  import { link } from 'svelte-spa-router';

  export let period: number[];
  export let duration: number[];
  export let position: string;
  export let company: string;
  export let page: string = undefined;
  export let url: string = undefined;
  export let country: string;
  export let description: string[];

  $: durationHtml = duration
    .map((number, index) => {
      if (number < 1) return false;
      const label = index === 0 ? 'year' : 'month';
      const plural = number > 1 ? 's' : '';
      const stillOn = period.length === 1 ? '+' : '';

      return [
        `${number}${stillOn}`,
        `${label}${plural}`,
      ].join('&nbsp;');
    })
    .filter(Boolean)
    .join(', ');
</script>

<section class="job">
  <div>
    <div class="period">
      {period[0]} &ndash; {period[1] ?? 'now'}
    </div>

    <div class="duration">
      {@html durationHtml}
    </div>
  </div>

  <span />

  <div>
    <div class="position">{position}</div>

    <div class="company">
      {#if page}
        <a
          href={page}
          target="_blank"
          use:link
        >
          {company}
        </a>
      {:else if url}
      <a
        href={url}
        target="_blank"
      >
        {company}
      </a>
      {:else}
        <span>
          {company}
        </span>
      {/if}

      <small />

      <span>{country}</span>
    </div>

    <div class="description">
      {#each description as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>
</section>

<style lang="stylus">
  .job
    display flex
  
    > div:first-child
      flex 0 0 12rem
      text-align right

      @media (max-width: 576px)
        flex-basis 8rem

    > span
      flex 0 0 1px
      width 1px
      background #444
      margin 0 2.5rem
      position relative

      &:before
      &:after
        content ''
        display block
        position absolute
        box-sizing border-box

      &:before
        width 17px
        height 17px
        margin-top 10px
        margin-left -8px
        border-radius 17px
        background-color #ffd700
        opacity .25
        z-index 0

      &:after
        width 9px
        height 9px
        margin-top 14px
        margin-left -4px
        background-color #222
        border-radius 9px
        border 2px solid #ffd700
        z-index 1

    > div:last-child
      flex 1 1 auto

    .period
      font-size 1.6rem
      line-height 2rem
      font-weight 600
      padding 1rem 0
      
      @media (max-width: 767px)
        line-height 2.5rem

    .duration
      font-size 1.4rem
      color var(--color-muted)

    .company
      display flex
      font-size 1.6rem
      font-weight 500

      small
        width 1px
        background-color var(--color-muted)
        margin 0 1rem

      a
        display inline-block
        color var(--color-text)
        transition color 0.2s linear
        text-decoration none
        border-bottom 1px dashed

        &:hover
          color var(--color-hover)

    .position
      font-size 1.8rem
      line-height 2rem
      font-weight 800
      padding 1rem 0

      @media (max-width: 767px)
        line-height 2.5rem

    .description
      font-size 1.6rem
      font-weight 100
      margin 1rem 0
      max-width 80%

      @media (max-width: 767px)
        max-width none

      p
        margin 1rem 0
</style>
