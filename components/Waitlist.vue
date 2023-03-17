<template lang="pug">
  section.wait-list
    b-img-lazy.device.t-l(
      src="/images/device-t-l.png"
    )
    b-img-lazy.device.b-r(
      src="/images/device-b-r.png"
    )
    b-container(
      fluid="xxl"
    )
      b-row(
        align-h="center"
      )
        b-col(
          cols="12"
          md="8"
          lg="6"
        )
          h2.mb-4.text-center Join the waitlist

          b-row(
            align-h="center"
          )
            b-col(
              cols="11"
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
              cols="11"
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
              cols="11"
              md="12"
            )
              b-form-group(
                label-for="phone"
              )
                b-form-input#last_name(
                  maxlength="80"
                  name="phone"
                  placeholder="Phone      (We'll send you a text when we have a spot available)"
                  type="tel"
                  required
                )
            b-col(
              cols="11"
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
                ) Sign Up

          .d-flex.justify-content-center.mt-4
            a
              b-img-lazy(
                src="/images/ios.svg"
                width="24"
                height="24"
              )
            a.mx-3
              b-img-lazy(
                src="/images/android.svg"
                width="24"
                height="24"
              )
            a
              b-img-lazy(
                src="/images/windows.svg"
                width="24"
                height="24"
              )

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wait-list {
  background-color: #A6D49F;
  padding-top: 60px;
  padding-bottom: 120px;
  position: relative;
}

.device {
  position: absolute;
  display: none;

  @include media-breakpoint-up(lg) {
    display: block;
  }

  &.t-l {
    top: 0;
    left: 0;
  }

  &.b-r {
    bottom: 0;
    right: 0;
  }
}

</style>
