<template lang="pug">
  section.sharing.bg-tan
    b-container
      b-row(
        align-h="center"
      )
        b-col(
          cols="11"
          md="12"
        )
          h2.text-primaryDark.mb-4 Why does sharing matter?
          p.larger.text-primaryDark.mb-3 That’s a great question. And one many of you are probably asking. Community-powered investing is a new concept when it comes to investing, but we think it’s a powerful one.

      b-row.mt-4(
        align-h="center"
      )
        b-col.pr-md-5.mb-5(
          cols="11"
          md="5"
        )
          b-img-lazy(
            fluid
            src="/images/Sharing.png"
          )

        b-col(
          cols="11"
          md="5"
          lg="7"

        )
          h3.text-primaryLight.mb-4 When you're down, the community has your back
          p.text-primaryDark.mb-5 When you’re just getting started investing (or maybe you just had a rough month) the community share will give you a boost (to your investments and your spirit).

          h3.text-primaryLight.mb-4 When you’re up, you have the community’s back
          p.text-primaryDark.mb-4 When you become a more established investor or if you have a great month, you can be there to help the community (just like they will do for you), which can feel pretty great.

          b-btn(
            src=""
            variant="accent"
          ) Join the waitlist

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.sharing {
  padding-top: 65px;
  padding-bottom: 70px;
}

</style>
