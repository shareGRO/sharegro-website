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
