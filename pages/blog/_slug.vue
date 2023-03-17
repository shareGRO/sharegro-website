<template lang="pug">
  main
    section.hero.bg-tan
      b-container.px-0(
        fluid="xxl"
      )
        b-row(
          align-v="stretch"
          no-gutters
          style="min-height: 550px"
        )
          b-col.p-5.hero-image.d-flex(
            cols="12"
            lg="6"
          )
            .my-auto
              h6.text-primaryDark ShareGro blog
              h1.text-primaryDark.mb-3 {{ post.title }}
              h2.text-primaryDark.mb-3 {{ post.subtitle }}
              hr.my-4
              p.larger.mb-0(v-if='post.author')
                strong By {{ post.author }}
              p.larger.text-primaryDark {{ $dayjs(post.date).format('MMMM D, YYYY') }}

          b-col.post-image(
            cols="12"
            lg="6"
            :style="`background-image: url('${post.image}')`"
          )

    section.body.bg-tan
      b-container
        b-row
          b-col(
            cols="12"
            md="10"
          )
            nuxt-content(:document="post")

    Waitlist

</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let post
    try {
      post = await $content('blog-posts', params.slug).fetch()
    } catch (e) {
      error({ message: 'Post not found' })
    }

    const posts = await $content('blog-posts')
      .sortBy('date', 'asc')
      .limit(3)
      .fetch()

    return {
      post,
      posts
    }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  padding-top: 70px;
  padding-bottom: 70px;
}

.hero {
  hr {
    width: 60%;
    margin-left: 0;
    border-top-width: 2px;
    border-top-color: $primaryDark;
  }
  .hero-image {
    background-image: url("/images/blog/LtBlue_ripples_header.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .post-image {
    background-size: cover;
    background-position: center;
  }
}

::v-deep .nuxt-content {
  h1, h2, h3, h4 {
    color:#115740
  }
}
</style>
