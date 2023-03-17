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
            h1.text-primaryDark Terms and Conditions

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.hero {
  background-image: url("/images/terms-and-conditions/Beige_hero.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-row {
  padding-bottom: 100px;
  padding-top: 100px;
}

</style>
