<template lang="pug">
b-col.mb-5
  b-card.bg-tan
    .header.d-flex(
      @click="open = !open"
    )
      .h4.flex-grow-1.flex-shrink-1.text-center {{ entry.term }}
      Chevron.flex-shrink-1(
        style="width: 20px; cursor: pointer"
        :flipped="open"
      )
    .body(v-show="open")
      div(v-html="$md.render(entry.body)")
      b-img-lazy.mb-4.px-5(
        fluid
        :src="`/images/learn-to-invest/${entry.image}.svg`"
      )

</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 120px;
  align-items: center;
}
</style>
