<script lang="ts">
  import Job from '../lib/Job.svelte';
  import experience from '../data/experience.json';

  import transition from './_transition';
</script>

<article in:transition>
  {#each experience as job}
    <Job {...job} />
  {/each}
</article>
