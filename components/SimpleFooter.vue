<template lang="pug">
  footer.bg-primaryDark
    b-container
      b-row.mb-4
        b-col(
          cols="12"
          md="6"
          lg="5"
        )
          b-img-lazy.mb-5(
            src="/svgs/logo-horizontal-light.svg"
            width="240"
          )
          //- .text-h5.text-uppercase.mb-2(
          //-   style="color: #A6D49F; font-size: 14px"
          //- ) Connect + Share
          //- .d-flex
            //- b-img-lazy.mr-3(
            //-   src="/svgs/facebook.svg"
            //-   width="40"
            //-   height="40"
            //- )
            //- b-img-lazy.mr-3(
            //-   src="/svgs/instagram.svg"
            //-   width="40"
            //-   height="40"
            //- )
            //- b-img-lazy.mr-3(
            //-   src="/svgs/twitter.svg"
            //-   width="40"
            //-   height="40"
            //- )
            //- b-img-lazy.mr-3(
            //-   src="/svgs/youtube.svg"
            //-   width="40"
            //-   height="40"
            //- )
            //- b-img-lazy(
            //-   src="/svgs/linkedin.svg"
            //-   width="40"
            //-   height="40"
            //- )
        //- b-col(
        //-   cols="12"
        //-   md="2"
        //- )
          //- h4 Company
          //- ul.list-unstyled
            //- li
            //-   nuxt-link(to="/") Our Approach
            //- li
            //-   nuxt-link(to="/our-investing-approach") Our Investing Approach
            //- li
            //-   nuxt-link(to="/sharing-overview") Sharing Overview
            //- li
            //-   nuxt-link(to="/") Learn to Invest
        //- b-col(
        //-   cols="12"
        //-   md="2"
        //- )
          //- h4 About
          //- ul.list-unstyled
            //- li
            //-   nuxt-link(to="/why-sharegro") Why ShareGro
            //- li
            //-   nuxt-link(to="/blog") Blog
            //- li
            //-   nuxt-link(to="/faq") FAQ
        b-col(
          cols="12"
          md="2"
        )
          h4 Contact
          ul.list-unstyled
            //- li
              nuxt-link(to="/contact") Contact Us
            li
              a.text-gray(href="mailto:support@sharegro.com") support@sharegro.com
            //- li
              a.text-gray(href="tel: 555-555-5555") 555-555-5555

      b-row(
        align-h="between"
      )
        b-col(
          cols="12"
          md="auto"
        )
          nuxt-link(
            to="/terms-of-use"
          ) Terms of Use
        b-col(
          cols="12"
          md="auto"
        )
          p.text-white(
            style="font-size: 14px;"
          ) &copy; {{ new Date().getFullYear() }} ShareGro. All Rights Reserved.

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer {
  padding-top: 70px;
  padding-bottom: 70px;
}

h4 {
  font-size: 14px;
  text-transform: uppercase;
  color: #A6D49F;
}

a {
  font-size: 14px;
  color: $white;
  text-transform: none;
  text-decoration: none;

  &:hover {
    color: $white;
    text-decoration: underline;
  }
}
</style>
