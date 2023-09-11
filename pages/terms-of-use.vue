<template lang="pug">
  main
    section.hero
      b-container
        b-row.hero-row(
          align-v="center"
        )
          b-col(
            cols="12"
            md="8"
          )
            h1.text-primaryDark Terms of Use
            iframe(
              class="terms-iframe"
              src="https://sharegro.zendesk.com/hc/en-us/articles/16561299202715-Member-Agreement-Terms"
            )

</template>

<script>
export default {
  layout: 'simple'
}
</script>

<style lang="scss" scoped>

.terms-iframe {
  width: calc(100vw - 120px);
  border: 0;
  height: calc(100vh - 380px);
}

</style>
