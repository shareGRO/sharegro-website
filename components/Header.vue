<template lang="pug">
b-navbar.px-0(
  sticky
  toggleable="lg"
)
  b-container(
    fluid="xl"
  )
    b-navbar-brand(
      to="/"
    )
      b-img.ml-4.ml-md-0(
        src="/images/logo.png"
        height="55"
      )
    b-btn.px-3.d-md-none(
      style="min-width: 0"
      variant="accent"
    ) Join the waitlist
    b-navbar-toggle.mr-3.mr-md-0(
      target="nav-collapse"
    )
    b-collapse#nav-collapse.ml-auto.px-md-3.px-lg-0(
      is-nav
    )
      b-navbar-nav.ml-auto.d-flex.align-items-center
        b-nav-item.text-primary(
          to="/our-approach"
        ) Our Approach
        b-nav-item(
          to="/why-sharegro"
        ) Why ShareGro
        b-nav-item(
          to="/learn-to-invest"
        ) Learn to Invest
        b-nav-item(
          to="/blog"
        ) Blog

      b-btn.py-2.px-2.d-none.d-md-block(
        variant="accent"
      ) Join Waitlist

</template>

<style lang="scss" scoped>
.navbar {
  background-color: $tan;
}

::v-deep .nav-item {
  @include media-breakpoint-down(md) {
    width: 100%;
    text-align: center;
    background-color: #A6D49F;
    border-bottom: 1px solid white;
  }
}

::v-deep .nav-link {
  text-transform: none;
  font-size: 18px;

  @include media-breakpoint-down(md) {
    width: 100%;
    color: $primaryDark !important;
  }

  @include media-breakpoint-up(md) {
    margin-right: 25px;
    color: $accent !important;
  }
}

::v-deep .navbar-toggler {
  border: none;
}
</style>
