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
            h1.mt-5.mb-3.text-primaryDark Contact Us
            p.larger.mb-5 Have a question, concern or comment we haven't already addressed in <span style="color: #42966A; font-weight: 600;">FAQ's, Our Approach</span> or <span style="color: #42966A; font-weight: 600;">Learn to Invest</span>? <br> Use the form to get in touch with us and we'll get back to you within 48 hours.

    section.form
      b-container.bg-color
        b-row.px-md-5.pt-4(
          align-h="center"
        )
          b-col(
            cols="11"
            md="12"
          )
            b-form(
              ref="form"
              autocomplete="on"
              netlify
              method="POST"
              name="Contact"
            )
            input(type="hidden" name="form-name" value="Contact")
            b-row
              b-col(
                cols="12"
                md="6"
              )
                b-form-group(
                  label-for="first-name"
                )
                  template(v-slot:label)
                    .text-primaryDark First Name<span>*</span>
                  b-form-input#first_name(
                    maxlength="40"
                    name="first-name"
                    required
                  )
              b-col(
                  cols="12"
                  md="6"
              )
                b-form-group(
                  label-for="last_name"
                )
                  template(v-slot:label)
                    .text-primaryDark Last Name<span>*</span>
                  b-form-input#last_name(
                    required
                    maxlength="80"
                    name="last_name"
                  )

            b-form-group(
              label-for="email"
            )
              template(v-slot:label)
                .text-primaryDark Email<span>*</span>
              b-form-input(
                required
                type="email"
                id="email"
                maxlength="80"
                name="email"
              )

            b-row
              b-col(
                cols="12"
                md="3"
              )
                b-form-group(
                  label-for="city"
                )
                  template(v-slot:label)
                    .text-primaryDark City
                  b-form-input(
                    required
                    type="text"
                    id="city"
                    name="city"
                  )
              b-col(
                cols="12"
                md="3"
              )
                b-form-group(
                  label-for="state"
                )
                  template(v-slot:label)
                    .text-primaryDark State
                  b-form-select(
                    required
                    :options='states'
                    id="state"
                    name="state"
                    plain
                    single
                    style='padding: 18px 10px'
                  )

              b-col(
                cols="12"
                md="6"
              )
                b-form-group(
                  label-for="country"
                )
                  template(v-slot:label)
                    .text-primaryDark Country
                  b-form-select(
                    required
                    :options='countries'
                    id="country"
                    name="country"
                    plain
                    single
                    style='padding: 18px 10px'
                  )

            b-form-group(
              label-for="text-area"
            )
              template(v-slot:label)
                .text-primaryDark Message
              b-form-textarea(
                required
                type="text"
                id="textarea"
                rows="4"
                max-rows="4"
              )

            b-row
              b-col.text-center.text-md-left.mb-4
                b-btn.mb-5.mt-3(
                  type="submit"
                  variant="accent"
                ) Submit

</template>

<script>
export default {
  data () {
    return {
      states: [
        'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
        'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
        'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
        'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
      ],
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']
    }
  }
}
</script>

<style lang="scss" scoped>

.bg-color {
  background-color: #A6D49F;
}

.contact {
  padding-top: 20px
}

</style>
