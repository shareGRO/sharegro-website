<template lang="pug">
  .question
    .d-flex.align-items-center.justify-content-between(
      @click="visible = !visible"
    )
      p.title {{ question.question }}
      span.arrow.mr-4(
        :class="{ 'rotated' : visible }"
      ) ^
    b-collapse.answer(
      v-model="visible"
      accordion="faq"
      role="tabpanel"
    )
      p {{ question.answer }}

</template>

<script>

export default {
  name: 'FAQ',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
  .question {
    border-bottom: 0px solid white;
    margin-bottom: 20px;
    background-color: #B2DBED;

    .title {
      cursor: pointer;
      padding-left: $spacer;
      margin: 25px 0;
      color: #115740;
      font-size: 24px;
      font-weight: 600;
    }

    .arrow {
      cursor: pointer;
      color: #115740;
      font-size: 40px;
      transition: transform .25s;

      &.rotated {
        transform: rotate(180deg);
      }
    }

    .answer {
      margin-bottom: 2 * $spacer;
      padding-left: $spacer;
      background-color: white;
      padding-top: 30px;
    }

    p {
      color: #115740;
      font-size: 18px;
      max-width: 920px;
    }
  }
</style>
