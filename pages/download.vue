<template lang="pug">
  main.bg-tan
    section.contact
      b-container
        b-row(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            h6.mt-5.mb-3.text-primaryDark Loading...
</template>

<script>
export default {
  name: 'Download',
  beforeMount () {
    document.location.replace('/')
  }
}
</script>
