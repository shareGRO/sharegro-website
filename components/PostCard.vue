<template lang="pug">
  nuxt-link.postcard(
    :to="`/blog/${post.slug}`"
  )
    b-img-lazy.mb-4(
      fluid
      :src="post.image"
      style="border: 1px solid black"
    )
    .h6.text-primaryDark.text-uppercase(
        style="font-size: 18px;"
      ) Investing 101 &middot; 2 min read
    h2.h4.text-primaryDark(
      style="font-size: 30px; font-weight: 500;"
    ) {{ post.title }}

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
