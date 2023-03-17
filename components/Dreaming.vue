<template lang="pug">
  section.dreaming.bg-tan
      b-container.px-0(
        fluid="xxl"
      )
        b-row(
          align-v="stretch"
          no-gutters
        )
          b-col.p-5.dreaming-image.d-flex(
            cols="12"
            md="6"
          )
            .my-auto
              h2 Dreaming of financial security?
              b-btn.mt-4(
                variant="accent"
              ) Join the waitlist

          b-col(
            cols="12"
            md="6"
          )
            b-img-lazy(
              fluid-grow
              src="/images/dreaming_img.png"
            )
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.dreaming {
  .dreaming-image {
    background-image: url("/images/our-approach/LtBlue_ripples_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
