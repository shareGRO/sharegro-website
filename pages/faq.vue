<template lang="pug">
  main
    section.hero
      b-container
        b-row.hero-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h1.text-white Frequently <br> asked questions.
            h2.text-white And their answers.

    FAQs(
      :questions="questions"
    )

</template>

<script>
export default {
  data () {
    return {
      questions: [
        {
          question: 'How does ShareGro make money?',
          answer: 'We charge a nominal AUM fee 0.2%, and a small monthly subscription fee $3.00 per month per portfolio.'
        },
        {
          question: 'Should I invest during a recession?',
          answer: 'It is very difficult to time the market and not something many people do well. We select and manage for use over the full cycle. The rebalancing approach seeks to improve results in both rising and falling markets. There can be no assurance this will succeed, and you could lose money. The best way to seek enhancement of natural results in the face of recessions and other downturns is dollar cost averaging of new money into your stock positions. This means you buy more when the portfolio (or individual positions) is down, for better returns.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  background-image: url("/images/faqs/DkGreen_Hero.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-row {
  padding-bottom: 70px;
  padding-top: 70px;
}

</style>
