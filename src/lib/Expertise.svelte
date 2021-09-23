<script lang="ts">
  export let skill: string;
  export let expertise: number;
  export let color: string = undefined;

  $: green = color && color === 'green';
  $: blue = color && color === 'blue';
</script>

<div class="expertise">
  <div>
    <div class="skill">{skill}</div>

    <div class="percent">{expertise}%</div>
  </div>

  <div
    class="progress"
    class:green
    class:blue
  >
    <div
      class="progress-bar"
      style="width: {expertise}%"
    />
  </div>
</div>

<style lang="stylus">
  .expertise
    > div
      display flex

    .skill
      font-size 1.4rem
      font-weight 800
      line-height 2rem
      flex 1 1 auto

    .percent
      font-size 1.4rem
      font-weight 100
      line-height 2rem
      flex 0 0 auto
      color var(--color-muted)

    .progress
      display flex
      height 1rem
      background rgba(255, 255, 255, 0.1)
      border 0.2rem solid rgba(255, 255, 255, 0.25)
      border-radius 0.5rem
      box-sizing border-box

    .progress-bar
      height 100%
      background rgba(255, 255, 255, 0.25)
      border 0.2rem solid var(--color-bg)
      border-radius 0.5rem
      box-sizing border-box

    .progress.green
      border-color #2f7d4f

      .progress-bar
        background-color #2f7d4f

    .progress.blue
      border-color #346591

      .progress-bar
        background-color #346591
</style>
