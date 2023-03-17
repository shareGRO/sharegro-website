<template lang="pug">
  main
    section.header
      b-container
        b-row
          b-col(
            cols="12"
            md="7"
          )
            h1.mb-4 Financial news and know how.
            p.larger.mb-45 Understanding how and when to invest is a powerful thing. We’re sharing a few of our opinions on getting started and the best ways to think about investing.
            b-btn(
              variant="accent"
            ) Join the waitlist

    section.articles.bg-tan
      b-container
        b-row.mb-5
          b-col(
            v-for="post in featuredPosts"
            :key="post.slug"
            cols="12"
            md="6"
          )
            nuxt-link(
              :to="`/blog/${post.slug}`"
            )
              b-card(
                border-variant="primaryDark"
                bg-variant="tan"
                no-body
              )
                b-img-lazy(
                  fluid
                  :src="post.image"
                )
                .px-4.py-3
                  .h6.text-uppercase.text-primaryDark(
                    style="font-size: 18px;"
                  ) Investing 101 &middot; 2 min read
                  h2.h4.text-primaryDark.mb-0(
                    style="font-size: 30px; font-weight: 500;"
                  ) {{ post.title }}

        b-row.pt-4.mb-4
          b-col.mb-5(
            v-for="post in otherPosts"
            :key="post.slug"
            cols="12"
            md="4"
          )
            PostCard(
              :post="post"
            )

        b-row.py-3
          b-col(
            cols="12"
          )
            .text-center
              b-btn(
                variant="accent"
              ) More articles

    Waitlist

</template>

<script>
export default {
  components: {
  },
  async asyncData ({ $content }) {
    const posts = await $content('blog-posts')
      .sortBy('date', 'asc')
      .fetch()

    const otherPosts = [...posts]

    otherPosts.splice(0, 2)

    const featuredPosts = posts.slice(0, 2)

    return {
      featuredPosts,
      otherPosts
    }
  },
  data () {
    return {
      filter: null,
      sort: 'newest'
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  // },
  // computed: {
  //   sortedPosts () {
  //     if (this.sort === 'oldest') {
  //       const reversed = [...this.otherPosts]
  //       return reversed.reverse()
  //     } else {
  //       return this.otherPosts
  //     }
  //   }
  // }
  }
}
</script>

<style lang="scss" scoped>

.header {
  background-image: url("/images/blog/LtBlue_ripples_header.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 90px;
  padding-bottom: 100px;
}

.articles {
  padding-top: 90px;
  padding-bottom: 70px;
}

</style>
