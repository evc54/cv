<script lang="ts">
  import photo from '../assets/photo.jpg';
  import svelte from '../assets/svelte.svg';

  import Icon from './Icon.svelte';
</script>

<aside>
  <div class="photo">
    <picture>
      <img
        src={photo}
        alt="Eugene"
      >
    </picture>
  </div>

  <div class="about">
    <div class="name">Eugene Chernyshev</div>
  
    <div class="position">Full Stack Web Developer</div>
    
      <ul class="contact">
        <li>
          <a
            href="mailto:evc22rus@gmail.com"
            target="_blank"
          >
            <Icon name="mail-circled" />
          </a>
        </li>
    
        <li>
          <a
            href="https://t.me/evc54"
            target="_blank"
          >
            <Icon name="telegram" />
          </a>
        </li>
    
        <li>
          <a
            href="https://github.com/evc54"
            target="_blank"
          >
            <Icon name="github-circled" />
          </a>
        </li>
      </ul>
  </div>

  <div class="bottom">
    Built with
    <a
      href="https://svelte.dev/"
      target="_blank"
      class="svelte-link"
    >
      <img
        src={svelte}
        alt="Svelte"
        aria-label="Svelte"
        class="svelte-logo"
      >
    </a>
  </div>
</aside>

<style lang="stylus">
  aside
    flex 0 0 30rem
    display flex
    flex-direction column
    padding 3rem
    text-align center
    box-sizing border-box

    @media (max-width: 767px)
      flex-direction row
      align-items center
      text-align left
      padding 0 4rem
      flex auto
      background var(--color-bg)

    .photo
      margin 3rem 0 1.5rem

      @media (max-width: 767px)
        margin 2rem 0

      picture
        display inline-flex
        align-content center
        justify-content center
        padding 0.3rem
        border-radius 100%
        background #fff
        border 1rem solid var(--color-content-bg)

        img
          width 17rem
          height 17rem
          border-radius 100%

          @media (max-width: 767px)
            width 12rem
            height 12rem

          @media (max-width: 576px)
            width 9rem
            height 9rem

    .about
      @media (max-width: 767px)
        margin-left 3rem

      .name
        font-size 3.5rem
        font-weight 700
        line-height 1
        margin 1.5rem 0

        @media (max-width: 576px)
          font-size 2.5rem

      .position
        font-size 1.8rem

        @media (max-width: 576px)
          font-size 1.4rem

      .contact
        margin 2rem 0
        padding 0
        list-style none

        @media (max-width: 767px)
          display none

        li
          display inline

          a
            font-size 2.4rem
            border 0

    .bottom
      font-size 1.5rem
      line-height 1.5rem
      margin-top auto

      @media (max-width: 767px)
        position absolute
        bottom 0
        left 0
        right 0
        margin 0
        text-align center
        line-height 4rem
        background var(--color-bg)

      .svelte-link
        border 0

        .svelte-logo
          width auto
          height 1.8rem
          vertical-align middle
</style>
