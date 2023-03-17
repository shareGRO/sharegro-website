<template lang="pug">
  section.faq
    b-container
      b-row(
        align-h="center"
      )
        b-col(
          cols="11"
          md="12"
        )
          FAQ(
            v-for="(question, index) in questions"
            :key="index"
            :question="question"
          )
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  padding-top: 90px;
  padding-bottom: 90px;
}
</style>
