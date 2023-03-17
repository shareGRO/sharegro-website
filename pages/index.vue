<template lang="pug">
  main
    section.hero.bg-tan
      b-container.pb-md-5
        b-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="6"
          )
            h1.text-primaryDark.mb-2 {{ page.heroHeadline }}
            p.text-primaryDark.mb-4(
              style="font-size: 24px; font-weight: 500"
            ) {{ page.heroSubtitle }}
            p.mb-45(
              style="font-size: 22px"
            ) {{ page.heroCopy }}
            h6.text-accent.mb-4 {{ page.formSubtitle }}

            b-row
              b-col(
                cols="12"
                md="6"
              )
                b-form-group(
                  label-for="first-name"
                )
                  b-form-input#first_name(
                    maxlength="40"
                    name="first-name"
                    placeholder="First Name"
                    required
                  )

              b-col(
                cols="12"
                md="6"
              )
                b-form-group(
                  label-for="last-name"
                )
                  b-form-input#last_name(
                    maxlength="80"
                    name="last-name"
                    placeholder="Last Name"
                    required
                  )

              b-col(
                cols="12"
                md="12"
              )
                b-form-group(
                  label-for="phone-number"
                )
                  b-form-input#phone_number(
                    maxlength="11"
                    name="phone-number"
                    placeholder="Phone Number"
                    required
                  )

              b-col.mt-3(
                cols="12"
                md="12"
              )
                .d-flex
                  b-form-group.flex-grow-1(
                    label-for="email"
                  )
                    b-form-input(
                      required
                      type="email"
                      id="email"
                      maxlength="80"
                      name="email"
                      placeholder="Email"
                    )
                  b-btn(
                    style="height: 60px"
                    type="submit"
                    squared
                    variant="accent"
                  ) {{ page.formButtonText }}

          b-col(
            cols="12"
            md="6"
          )
            b-img-lazy.hero-image(
              :src="page.heroImage"
            )

    section.how-it-works
      b-container
        b-row.text-center.text-md-left
          b-col(
            cols="12"
            md="7"
          )
            b-row
              b-col(
                cols="12"
                md="2"
              )
                b-img-lazy.mb-3(
                  width="58"
                  height="90"
                  src="/images/sharegro-icon.svg"
                )
              b-col(
                cols="12"
                md="10"
              )
                h2.h6.text-primaryLight.text-uppercase {{ page.howHeadline }}
                h3.h2.text-primaryDark(v-html="$md.render(page.howSubtitle)")

        b-row.mb-md-5.pb-md-5.text-center.text-primaryDark(
          style="margin-bottom: 40px"
          align-v="stretch"
          align-h="center"
        )
          b-col.mb-5.mb-lg-0(
            cols="11"
            md="4"
          )
            b-card.fill-height.p-4(
              style="margin-top: 80px; border-width: 2px;"
              bg-variant="tan"
              border-variant="primaryLight"
            )
              b-img-lazy.mb-5(
                fluid
                src="/images/Get_Started.svg"
              )
              h5.text-primaryDark Get started. Right now.
              p Download the mobile app, choose your risk tolerance and fund your account — it’s that simple to get started. Your portfolio will be automatically created based on your preferences, which you can adjust at any time.

          b-col.mb-5.mb-lg-0(
            cols="11"
            md="4"
          )
            b-card.fill-height.p-4(
              style="margin-top: 40px; border-width: 2px;"
              bg-variant="tan"
              border-variant="primaryLight"
            )
              b-img-lazy.mb-5(
                fluid
                src="/images/Watch_Your_Investments_Work.svg"
              )
              h5 Watch your investments work.
              p Your ShareGro portfolio will get to work immediately. It will automatically rebalance over time to adjust for market shifts and you can decide how you want to use your investments each month.

          b-col.mb-5.mb-lg-0(
            cols="11"
            md="4"
          )
            b-card.fill-height.p-4(
              bg-variant="tan"
              border-variant="primaryLight"
              style="border-width: 2px;"
            )
              b-img-lazy.mb-5(
                fluid
                src="/images/Share.svg"
              )
              h5 Share the risk. Share the reward.
              p 1% of your investment will be shared with the community, and 1% of the community’s investments will be shared right back with you. When you’re down, the community has your back. And when you’re up, you bring the community with you.

        b-row
          b-col.text-center
            b-btn.mt-md-2.mb-3(
              variant="accent"
              to="learn-to-invest"
            ) Learn to Invest

    .community.bg-darkTan
      b-container
        b-row(
          align-h="center"
        )
          b-col.text-center.mb-3(
            cols="11"
            md="10"
          )
            b-img-lazy.mb-3(
              width="58"
              height="73"
              src="/images/sharegro-icon.svg"
            )
            h2.text-primaryDark.mb-45 {{ page.communityHeadline }}

            b-embed(
              type="iframe"
              aspect="16by9"
              :src="page.communityVideoLink"
              allowfullscreen
            )
        //- centered video - insert here

        b-row.mt-4(
          align-h="center"
        )
          b-col.text-center(
            cols="9"
            md="8"
          )
            h3.h4.mb-45 {{ page.communitySubtitle }}
            b-btn.mb-4(
              variant="accent"
              to="/sharing-overview"
            ) Explore Sharing

    section.we-built
      b-container
        b-row.text-center.text-md-left(
          align-v="center"
          align-h="center"
        )
          b-col(
            cols="11"
            md="6"
          )
            b-row
              b-col(
                cols="12"
                md="2"
              )
                b-img-lazy.mr-4.mb-4(
                  width="58"
                  height="73"
                  src="/images/sharegro-icon-light.svg"
                )
              b-col(
                cols="12"
                md="10"
              )
                h2.text-white(v-html="$md.render(page.builtHeadline)")

            p.text-white.mt-2.pr-md-5 {{ page.builtCopy }}

            b-btn.mt-3.mb-5(
              type="submit"
              variant="secondaryLight"
            ) {{ page.builtButtonText }}

          b-col.text-center(
            cols="10"
            md="5"
            offset-md="1"
          )
            b-img-lazy(
              fluid-grow
              :src="page.builtImage"
            )

    section.education.bg-tan
      b-container
        b-row.mt-5(
          align-h="center"
        )
          b-col.text-center.mb-4(
            cols="11"
            md="10"
          )
            b-img-lazy.mb-3(
              width="58"
              height="73"
              src="/images/sharegro-icon.svg"
            )

            h6.text-primaryLight.text-uppercase.mt-3 {{ page.blogEyebrow }}

            h2.text-primaryDark.mt-3 {{ page.blogHeadline }}

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

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const page = await $content('homepage').fetch()

    const posts = await $content('blog-posts')
      .sortBy('date', 'asc')
      .fetch()

    const allPosts = [...posts]

    const featuredPosts = allPosts.slice(2, 5)

    return {
      page,
      featuredPosts
    }
  },
  data () {
    return {
      filter: null,
      sort: 'newest'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 45px;
  padding-bottom: 50px;
  overflow: hidden;
  position: relative;

  @include media-breakpoint-up(lg) {
    padding-bottom: 70px;
  }

  .hero-image {
    position: relative;
    max-width: 100%;
    width: 100%;
    left: 40px;

    @include media-breakpoint-up(lg) {
      max-width: unset;
      position: relative;
      left: 1px;
      width: 900px !important;
    }
  }
}

.how-it-works {
  padding-bottom: 70px;
  background: linear-gradient(to bottom,  $tan 40%, $darkTan 40%);
}

.community {
  padding-bottom: 50px;
}

.we-built {
  background-image: url("/images/homepage/green_ripples_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 90px;
}

.education {
  padding-top: 70px;
  padding-bottom: 40px;
}

</style>
