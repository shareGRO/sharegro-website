<template lang="pug">
  main
    b-img-lazy.hero-image(
      :src="page.heroImage"
    )
    section.hero.bg-tan
      b-container
        b-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="8"
            lg="7"
            offset-lg="5"
          )
            h1.text-primaryDark.mb-4(v-html="$md.render(page.heroHeadline)")
            p.larger.mb-45(v-html="$md.render(page.heroCopy)")
            b-btn(
              variant="accent"
              :href="page.heroButtonUrl"
            ) {{ page.heroButtonText }}

    section.bg-darkTan.how
      b-container
        b-row.mb-5.pt-md-5.mt-md-5(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h2.text-primaryDark.text-center.mb-4 {{ page.howHeadline }}

            b-embed(
              type="iframe"
              aspect="16by9"
              :src="page.howVideoUrl"
              allowfullscreen
            )

        b-row.pt-md-5.text-center.text-primaryDark(
          align-h="center"
        )
          b-col.mb-3(
            cols="11"
            md="4"
            v-for="(step, index) in page.steps"
            :key="index"
          )
            .h6.text-uppercase.mb-3(
              style="font-weight: 600;"
            ) {{ step.number }}
            h2.h3.mb-4 {{ step.headline }}
            p.larger.mb-5(v-html="$md.render(step.copy)")

        b-row.pt-3
          b-col(
            cols="12"
            md="12"
          )
            p.larger.text-primaryDark.text-center(
              style="font-weight: 600;"
            ) {{ page.howEyebrowText }}

    Sharing

    Dreaming

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const page = await $content('sharing-overview').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  padding-top: 50px;
  padding-bottom: 70px;
  overflow: hidden;
  position: relative;

}

.hero-image {
  max-width: 100%;
  width: 100%;
  z-index: 1;

  @include media-breakpoint-up(md) {
    width: 500px !important;
    max-width: unset;
    position: absolute;
  }

  @include media-breakpoint-up(lg) {
    width: 500px !important;
  }

  @include media-breakpoint-up(xl) {
    width: 620px !important;
  }
}

.how {
  padding-top: 70px;
  padding-bottom: 55px;
}

</style>
