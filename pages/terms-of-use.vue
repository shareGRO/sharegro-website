<template lang="pug">
  main
    section.hero
      b-container
        b-row.hero-row(
          align-v="center"
        )
          b-col(
            cols="12"
            md="12"
          )
            h1.text-primaryDark Terms of Use
            iframe(
              class="terms-iframe"
              src="https://sharegro.com"
            )

</template>

<script>
export default {
  layout: 'simple'
}
</script>

<style lang="scss" scoped>

.terms-iframe {
  width: 100%;
  border: 0;
  height: calc(100vh - 380px);
}

</style>
