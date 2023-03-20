<template lang="pug">
  main.bg-tan
    section.hero
      b-container
        b-row
          b-col(
            cols='12'
            md='8'
            lg='6'
          )
            b-img.mb-4(
              width='280'
              src='/svgs/logo-horizontal-dark.svg'
            )
            h1 Ready for a better way to invest?
            h2.mb-4 It's almost here.
            p Welcome to ShareGro, a new investing platform built to benefit all of you, based on your unique preferences and goals. This approach to investing, combined with community sharing, makes it a different kind of app for a different kind of investor — one that cares about their financial freedom, and also cares about those around them. Check back soon for updates on how to be one of the first to experience the app when it launches.
          b-col(
            cols='12'
            md='4'
            lg='6'
          )
            b-img(
              fluid
              src='/images/homepage/temp-hero.png'
            )

</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 45px;
  padding-bottom: 50px;

  @include media-breakpoint-down(sm) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
  }
}
</style>
