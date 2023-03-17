<template lang="pug">
  main
    section.hero.bg-tan
      b-container
        b-row(
          align-h="center"
        )
          b-col.text-center(
            cols="12"
            md="10"
          )
            b-img-lazy(
              fluid
              :src="page.heroImage"
            )
            h1.text-primaryDark(v-html="$md.render(page.heroHeadline)")
            p.larger(v-html="$md.render(page.heroCopy)")

    section.values
      b-container
        b-row.mb-4(
          align-h="center"
        )
          b-col.text-center(
            cols="12"
            md="10"
          )
            h2.text-primaryDark {{ page.valueHeadline }}

        b-row.pb-md-4
          b-col.mb-3(
            cols="12"
            md="4"
            v-for="(card, index) in page.valueCards"
            :key="index"
          )
            b-card.fill-height.text-center(
              :bg-variant="isEven(index) ? 'primaryLight' : 'secondaryDark'"
              :img-src="card.image"
            )
              .pt-4
                h3.text-white {{ card.headline }}
                div.text-white(v-html="$md.render(card.copy)")

    section.build.bg-darkTan
      b-container
        b-row.text-center(
          style="margin-bottom: 75px"
          align-v="center"
          v-for="(block, index) in page.buildBlocks"
          :key="index"
        )
          b-col(
            cols="12"
            md="4"
          )
            b-img-lazy(
              fluid
              :src="block.image"
            )
          b-col.text-md-left(
            cols="12"
            md="8"
          )
            h2.text-primaryDark.mb-4 {{ block.headline }}
            div.larger.text-primaryDark(v-html="$md.render(block.copy)")

    section.benefit
      b-container.px-0(
        fluid="xxl"
      )
        b-row(
          align-v="stretch"
          no-gutters
        )
          b-col.p-5.benefit-image.d-flex(
            cols="12"
            md="6"
          )
            .my-auto
              h2.text-white.mb-5 {{ page.benefitHeadline }}
              b-btn.text-primaryDark(
                to="/our-approach"
                variant="secondaryLight"
              ) Explore our Approach

          b-col(
            cols="12"
            md="6"
          )
            b-img-lazy(
              fluid-grow
              :src="page.benefitBackgroundImage"
            )

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const page = await $content('why-sharegro').fetch()

    return {
      page
    }
  },
  methods: {
    isEven (i) {
      return i % 2 === 0
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  padding-top: 40px;
  padding-bottom: 40px;
  overflow: hidden;
  position: relative;
}

.values {
  padding-top: 40px;
  padding-bottom: 40px;
  background: linear-gradient(to bottom,  $tan 40%, $darkTan 40%);
}

.build {
  padding-top: 20px;
  padding-bottom: 5px;
}

.benefit {
  .benefit-image {
    background-image: url("/images/why-sharegro/DkGreen_benefit_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
