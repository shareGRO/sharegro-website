<template lang="pug">
  main(
    style='overflow: hidden;'
  )
    section.hero.bg-tan
      b-container
        b-row
          b-col.text-primaryDark(
            cols="12"
            md="5"
          )
            h1(v-html="$md.render(page.heroHeadline)")
            p.larger(v-html="$md.render(page.heroCopy)")

          b-col(
            cols="12"
            md="7"
          )
            b-img-lazy.hero-image(
              width="862"
              height="942"
              src="/images/our-approach/hero.png"
            )

    section.design
      b-img-lazy.design-image(
        width='640'
        src="/images/our-approach/design.png"
      )
      b-container
        b-row.text-white(
          style='margin-bottom: 80px'
        )
          b-col.pb-5(
            cols="12"
            md="7"
          )
            h2.mb-4 {{ page.designHeadline1 }}
            h3.mb-3 {{ page.designSubtitle1 }}
            p.larger.mb-5 {{ page.designCopy1 }}
            b-btn(
              variant="secondaryLight"
              target="_blank"
              :href="page.designButtonUrl1"
            ) {{ page.designButtonText1 }}

          b-col(
            cols="12"
            md="5"
          )

        b-row.text-white.mb-5
          b-col(
            cols="12"
            md="6"
            offset-md='6'
          )
            h3.mb-3 {{ page.designHeadline2 }}
            p.larger.mb-5 {{ page.designCopy2 }}
            b-btn(
              variant="secondaryLight"
              target="_blank"
              :href="page.designButtonUrl2"
            ) {{ page.designButtonText2 }}

    section.in-action.bg-tan
      b-container
        b-row.mb-5(
          align-h="center"
        )
          h2.text-primaryDark.text-center {{ page.actionHeadline }}

        b-row.mb-5.pt-3(
          align-v='center'
          v-for="(actionPoint, index) in page.actionPoints"
          :key="index"
        )
          b-col.pl-5(
            cols="12"
            md="6"
            :order-md="isEven(index) ? 2 : 1"
          )
            h3(
              :class="[isEven(index) ? 'text-primaryLight' : 'text-secondaryDark']"
            ) {{ actionPoint.headline }}
            ul.text-primaryDark
              li Simple account set up
              li Quick and secure funding
              li Videos to walk you through the process

          b-col.d-flex.justify-content-center(
            cols="12"
            md="6"
            :order-md="isEven(index) ? 1 : 2"
          )
            b-img-lazy(
              width="630"
              height="630"
              :src="actionPoint.image"
            )

        //- b-row.mb-5(
        //-   align-v='center'
        //- )
        //-   b-col.d-flex.justify-content-center(
        //-     cols="12"
        //-     md="6"
        //-   )
        //-     b-img-lazy(
        //-       width="268"
        //-       height="518"
        //-     )

        //-   b-col(
        //-     cols="12"
        //-     md="6"
        //-   )
        //-     h3.text-secondaryDark The easiest risk assessment
        //-     ul.text-primaryDark
        //-       li You don't even have to know what risk assessment means
        //-       li Just three simple questions
        //-       li It's that easy

        //- b-row.mb-5(
        //-   align-v='center'
        //- )
        //-   b-col(
        //-     cols="12"
        //-     md="6"
        //-   )
        //-     h3.text-primaryLight Your very own dashboard
        //-     ul.text-primaryDark
        //-       li Personalized for your account
        //-       li Check in on your balance and growth
        //-       li See sharing and rebalancing in action

        //-   b-col.d-flex.justify-content-center(
        //-     cols="12"
        //-     md="6"
        //-   )
        //-     b-img-lazy(
        //-       width="268"
        //-       height="518"
        //-       src="/images/our-approach/iPhone_mockup1.svg"
        //-     )

        b-row(
          align-v="stretch"
        )
          b-col(
            cols="12"
            md="6"
            v-for="(card, index) in page.cards"
            :key="index"
          )
            b-card.fill-height(
              border-variant="primaryLight"
              bg-variant="tan"
            )
              .text-center
                b-aspect.d-flex.align-items-center
                  b-img-lazy(
                    :src="card.image"
                  )

              h3.text-secondaryDark.text-center.text-md-left {{ card.headline }}
              ul
                li Help is always a few clicks away
                li In-app chat for questions, comments and concerns
                li Self-service portal for help when you need it

          //- b-col(
          //-   cols="12"
          //-   md="6"
          //- )
          //-   b-card(
          //-     border-variant="primaryLight"
          //-     bg-variant="tan"
          //-   )
          //-     .text-center
          //-       b-img-lazy(
          //-         width="156"
          //-         height="320"
          //-         :src="card.image"
          //-       )
          //-     .text-center.text-md-left
          //-       h3.text-primaryLight {{ card.headline }}
          //-       ul
          //-         li 256-bit SSL encryption
          //-         li Multi-factor authentication and password backup
          //-         li It’s really secure (in case you don’t understand the above)

    section.why
      b-container.px-0(
        fluid="xxl"
      )
        b-row(
          align-v="stretch"
          no-gutters
        )
          b-col.p-5.why-image.d-flex(
            cols="12"
            lg="6"
          )
            .my-auto
              h2 {{ page.whyHeadline }}
              p.mt-4 {{ page.whyCopy }}
              b-btn.mt-3(
                variant="accent"
              ) {{ page.whyButton }}

          b-col(
            cols="12"
            lg="6"
          )
            b-img-lazy(
              fluid-grow
              :src="page.whyImage"
            )

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const page = await $content('our-approach').fetch()

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
  padding-top: 100px;
  padding-bottom: 150px;
  z-index: 3;

  .hero-image {
    @include media-breakpoint-up(md) {
      position: absolute;
      top: -87px;
      left: 0;
      z-index: 3;
    }
  }
}

.design {
  position: relative;
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #42966A;

  .design-image {
    @include media-breakpoint-up(md) {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

.community {
  padding-top: 90px;
  background-color: #42966A;
  padding-right: 40px;
}

.in-action {
  padding-top: 90px;
  padding-bottom: 90px;
}

.why {
  .why-image {
    background-image: url("/images/our-approach/LtBlue_ripples_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
