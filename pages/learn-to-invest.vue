<template lang="pug">
  main
    b-img-lazy.hero-image(
      :src="page.heroImage"
    )
    section.hero.bg-tan
      b-container
        b-row.pb-md-5.pt-md-5(
          align-h="center"
        )
          b-col(
            cols="11"
            md="8"
            lg="7"
            offset-lg="5"
          )
            h1.text-primaryDark.mb-4 {{ page.heroHeadline }}
            p.larger.mb-45(v-html="$md.render(page.heroCopy)")
            b-btn(
              v-if="page.heroButtonText && page.heroButtonUrl"
              :href="page.heroButtonUrl"
              variant="accent"
            ) {{ page.heroButtonText }}

    section.bg-darkTan.video
      b-container
        b-row.mb-5.pt-md-5.mt-md-5(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h2.text-primaryDark.text-center.mb-4 {{ page.videoHeadline }}

            b-embed(
              type="iframe"
              aspect="16by9"
              :src="page.videoLink"
              allowfullscreen
            )

    section.bg-darkTan.glossary
      b-container
        b-row.mb-5.mt-md-4(
          align-h="center"
        )
          b-col.text-primaryDark.text-center(
            cols="11"
            md="12"
          )
            h2.mb-4 {{ page.glossaryHeadline }}
            p.larger(v-html="$md.render(page.glossaryCopy)")

        b-row(
          cols-lg="3"
          cols-sm="1"
        )
          GlossaryCard(
            v-for="(entry, index) in glossary"
            :key="index"
            :entry="entry"
          )

    section.education.bg-tan
      b-container
        b-row.mt-2.mt-md-4(
          align-h="center"
        )
          b-col.text-center.mb-5(
            cols="11"
            md="10"
          )

            h6.text-primaryLight.text-uppercase.mt-3 {{ page.educationEyebrow }}

            h2.text-primaryDark.mt-3 {{ page.educationHeadline }}

        b-row.pt-4
          b-col.mb-5.text-center.text-md-left(
            v-for="post in featuredPosts"
            :key="post.slug"
            cols="12"
            md="4"
          )
            PostCard(
              :post="post"
            )

        b-row(
          align-h="center"
        )
          nuxt-link(
              :to="`/blog`"
            )
            b-btn.mt-1.mb-5(
              variant="accent"
            ) Visit Blog

    section.experts.bg-tan
      b-container
        b-row(
          align-h="center"
        )
          b-col.text-center.mb-5(
            cols="11"
            md="10"
          )
            h6.text-primaryLight.text-uppercase.mt-3 {{ page.expertsHeadline }}

            h2.text-primaryDark.mt-3 {{ page.expertsSubtitle }}

        b-row(
          align-v="stretch"
          align-h="center"
        )
          b-col.text-white.text-center.d-flex.flex-column(
            cols="11"
            md="5"
          )
            b-img-lazy.flex-shrink-1(
              fluid
              src="/images/learn-to-invest/Resource_Green.png"
            )
            .bg-primaryLight.flex-grow-1.px-3.pb-3
              .h6 Cathie Wood
              .h6.font-weight-regular(
                style="font-size: 24px;"
              ) CEO, CIO, ARK Invest
              .h6(
                style="font-size: 24px;"
              ) ARK Invest

          b-col.text-white.text-center.d-flex.flex-column(
            cols="11"
            md="5"
          )
            b-img-lazy.flex-shrink-1(
              fluid
              src="/images/learn-to-invest/Resource_Blue.png"
            )
            .bg-secondaryDark.flex-grow-1.pb-5.px-3
              .h6 Peter Lynch
              .h6.font-weight-regular(
                style="font-size: 24px;"
              ) Author, Thought Leader, Former manager of the Magellan Fund
              .h6(
                style="font-size: 24px;"
              ) One Up On Wall Street

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const posts = await $content('blog-post')
      .sortBy('date', 'asc')
      .fetch()

    const allPosts = [...posts]

    const featuredPosts = allPosts.slice(2, 5)

    const page = await $content('learn-to-invest').fetch()

    return {
      featuredPosts,
      page
    }
  },
  data () {
    return {
      filter: null,
      sort: 'newest',
      glossary: [
        {
          term: 'Assests Under Management (AUM)',
          body: 'The total assets you have invested with a financial institution.',
          image: 'AUM'
        },
        {
          term: 'Equity',
          body: 'The value of an investor’s stake in the company.',
          image: 'Equity'
        },
        {
          term: 'Exchange Traded Fund (ETF)',
          body: 'A pooled investment type that brings together various assets into one fund. ETFs will typically track a particular index, sector or commodity.',
          image: 'ETF'
        },
        {
          term: 'Fixed Income',
          body: 'An approach to investing focused on preserving capital and income. It will typically include investments like government and corporate bonds, CDs and money market funds. This approach can offer less risk than stocks.',
          image: 'FixedIncome'
        },
        {
          term: 'Portfolio',
          body: 'A stock portfolio is a collection of stocks maintained inside a brokerage account. A good portfolio is diversified across different sectors and company sizes to weather the ups and downs of the changing markets. ',
          image: 'Portfolio'
        },
        {
          term: 'Rebalancing',
          body: 'Buying or selling the assets in a portfolio to regain and maintain their level of asset allocation. Most financial institutions rebalance on a predetermined schedule — monthly, quarterly, etc. — and don’t think about it in between those dates. \n\n ShareGro utilizes ongoing rebalancing, buying and selling based on predetermined triggers. If an asset hits a predetermined high, we will sell. If an asset hits a predetermined low, we buy. This means portfolios are in constant optimization.',
          image: 'Rebalance'
        },
        {
          term: 'Risk Tolerance',
          body: 'Risk is determined by your desire for a return and tolerance to accelerate growth. Strategies may include reducing diversification or finding volatile stocks. A good portfolio is managed and curated over the course of your life and changes as your life stages change.',
          image: 'RiskTolerance'
        },
        {
          term: 'Securities',
          body: 'A catch all term for stocks, bonds, mutual funds, exchange-traded funds or other types of investments you can buy or sell.',
          image: 'Securities'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Learn To Invest'
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
  }

  @include media-breakpoint-up(lg) {
    max-width: unset;
    position: absolute;
    width: 500px !important;
  }

  @include media-breakpoint-up(xl) {
    width: 620px !important;
  }
}

.video {
  padding-top: 70px;
  padding-bottom: 20px;
}

.glossary {
  padding-top: 20px;
  padding-bottom: 55px;
}

.education {
  padding-top: 50px;
  padding-bottom: 40px;
}

.experts {
  padding-bottom: 90px;
}

</style>
