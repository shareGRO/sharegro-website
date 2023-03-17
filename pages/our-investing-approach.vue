<template lang="pug">
  main
    section.hero.bg-tan
      b-container
        b-row.mb-md-5.pb-md-5(
          align-h="center"
        )
          b-col(
            cols="11"
            md="6"
          )
            h1.text-primaryDark.mb-3 {{ page.heroHeadline }}
            p.mb-4.larger(v-html="$md.render(page.heroCopy)")
            b-btn(
              variant="accent"
            ) {{ page.heroButton }}
          b-col(
            cols="12"
            md="5"
            offset-md="1"
          )
            b-img-lazy.hero-image(
              fluid
              :src="page.heroImage"
            )

    section.build.bg-darkTan
      b-container
        b-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h2.text-primaryDark.mb-4 {{ page.buildHeadline }}
            p.larger(v-html="$md.render(page.buildCopy)")

    section.step-1.bg-tan
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="6"
          )
            h3.h6.text-primaryDark.text-uppercase {{ page.step1Text }}
            h2.text-primaryLight.mb-4 {{ page.step1Headline }}
            p.larger.mr-md-5.mb-4(v-html="$md.render(page.step1SubHeadline)")
            p.mr-md-5(v-html="$md.render(page.step1Copy)")

          b-col(
            cols="11"
            md="6"
            lg="5"
            offset-lg="1"
          )
            b-img-lazy(
              fluid
              :src="page.step1Image"
            )

    section.tldr
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            .d-flex
              b-img-lazy.mr-45(
                width="58"
                height="73"
                src="/images/sharegro-icon.svg"
              )
              p.larger.text-primaryDark.mb-0(v-html="$md.render(page.tldr1Copy)")

    section.who
      b-container
        b-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h3.text-primaryDark.mb-45 {{ page.whoHeadline }}

        b-row(
          align-v="center"
          align-h="center"
          cols-lg="5"
          cols="2"
        )
          b-col.mb-4.mb-lg-0.text-center(
            v-for="(logo, index) in page.logos"
            :key="index"
          )
            b-img-lazy.p-3(
              fluid
              :src="logo.image"
            )

    section.step-2.bg-tan
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="5"
            order="2"
            order-md="1"
          )
            b-img-lazy(
              fluid
              :src="page.step2Image"
            )
          b-col.pl-lg-5(
            cols="11"
            md="6"
            offset-md="1"
            order="1"
            order-md="2"
          )
            h3.h6.text-primaryDark.text-uppercase {{ page.step2Text }}
            h2.text-primaryLight.mb-4 {{ page.step2Headline }}
            p.larger.mr-lg-5.mb-4(v-html="$md.render(page.step2SubHeadline)")
            p.mr-5(v-html="$md.render(page.step2Copy)")

    section.tldr
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            .d-flex
              b-img-lazy.mr-45(
                width="58"
                height="73"
                src="/images/sharegro-icon.svg"
              )
              p.larger.text-primaryDark.mb-0(v-html="$md.render(page.tldr2Copy)")

    section.step-3.bg-tan
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="6"
          )
            h3.h6.text-primaryDark.text-uppercase {{ page.step3Text }}
            h2.text-primaryLight.mb-4 {{ page.step3Headline }}
            p.larger.mr-lg-5.mb-4(v-html="$md.render(page.step3SubHeadline)")
            p.mr-lg-5(v-html="$md.render(page.step3Copy)")

          b-col(
            cols="11"
            md="6"
            lg="5"
            offset-lg="1"
          )
            b-img-lazy(
              fluid
              :src="page.step3Image"
            )

    section.tldr
      b-container
        b-row(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            .d-flex
              b-img-lazy.mr-45(
                width="58"
                height="73"
                src="/images/sharegro-icon.svg"
              )
              p.larger.text-primaryDark.mb-0(v-html="$md.render(page.tldr3Copy)")

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const page = await $content('our-investing-approach').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  padding-top: 70px;
  padding-bottom: 60px;

  .hero-image {
    max-width: 100%;
    width: 100%;

    @include media-breakpoint-up(md) {
      left: 0;
      top: -50px;
      max-width: unset;
      position: absolute;
      width: 692px !important;
      height: 740px !important;
    }
  }
}

.build {
  padding-top: 50px;
  padding-bottom: 40px;
}

.tldr {
  padding-top: 40px;
  padding-bottom: 35px;
  background-color: $secondaryLight;
}

.who {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #A6D49F;

  .logo-grid {
    .col-6 {
      margin-bottom: 30px;
    }
  }
}

.step-1 {
  padding-top: 60px;
  padding-bottom: 70px
}

.step-2 {
  padding-top: 70px;
  padding-bottom: 70px
}

.step-3 {
  padding-top: 70px;
  padding-bottom: 70px
}

</style>
