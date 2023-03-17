<template lang="pug">
  section.scenario
    b-container
      b-row.mb-5(
        align-h="center"
      )
        b-col(
          cols="12"
          md="12"
        )
          h2.text-primaryDark.text-center Check out the scenario below

      b-row.pb-4
        b-col(
          cols="12"
          md="3"
        )
        b-col(
            cols="12"
            md="3"
          )
            p.larger.text-primaryDark.text-center Monthly Investment
        b-col(
          cols="12"
          md="3"
        )
          p.larger.text-primaryDark.text-center Yearly Investment

        b-col(
          cols="12"
          md="3"
        )
          p.larger.text-primaryDark.text-center Monthly Share Amount

      b-row.mb-5.pb-3
        b-col(
          cols="12"
          md="3"
        )
          .d-flex
            b-img-lazy(
              width="48"
              height="42"
              src="/images/Scenario_asset.svg"
            )
            h3.text-primaryDark.pl-5 Mark
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )

      b-row.mb-5.pb-3
        b-col(
          cols="12"
          md="3"
        )
          .d-flex
            b-img-lazy(
              width="48"
              height="42"
              src="/images/Scenario_asset.svg"
            )
            h3.text-primaryDark.pl-5 Carla
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )

      b-row
        b-col(
          cols="12"
          md="3"
        )
          .d-flex
            b-img-lazy(
              width="48"
              height="42"
              src="/images/Scenario_asset.svg"
            )
            h3.text-primaryDark.pl-5 Brian
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )
        b-col(
          cols="12"
          md="3"
        )

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.scenario {
  background-color: #B2DBED;
  padding-top: 70px;
  padding-bottom: 80px;
}

</style>
