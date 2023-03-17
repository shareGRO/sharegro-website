<template>
  <svg
    class="chevron"
    :class="{'flipped' : flipped, chevron }"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    enable-background="new 0 0 20.9 16.1"
    viewBox="0 0 20.9 16.1"
  ><path fill="#84265e" fill-rule="evenodd" d="M20.7 12.9c.3.4.3.9 0 1.2l-1.2 1.6c-.4.5-1.2.5-1.6 0l-7.4-9.3L3 15.7c-.4.5-1.2.5-1.6 0L.2 14.1c-.3-.4-.3-.9 0-1.2L10.5 0l10.2 12.9z" clip-rule="evenodd" /><defs><filter
    id="a"
    width="43"
    height="54"
    x="-11.6"
    y="-18.7"
    filterUnits="userSpaceOnUse"
  ><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter></defs><mask
    id="b"
    width="43"
    height="54"
    x="-11.6"
    y="-18.7"
    maskUnits="userSpaceOnUse"
  ><path fill="#fff" fill-rule="evenodd" d="M20.7 12.9c.3.4.3.9 0 1.2l-1.2 1.6c-.4.5-1.2.5-1.6 0l-7.4-9.3L3 15.7c-.4.5-1.2.5-1.6 0L.2 14.1c-.3-.4-.3-.9 0-1.2L10.5 0l10.2 12.9z" clip-rule="evenodd" filter="url(#a)" /></mask><g mask="url(#b)"><path fill="#42966a" d="M-11.6-18.7h43v54h-43z" /></g></svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    flipped: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.chevron {
  transform: rotate(180deg);

  &.flipped {
    transform: rotate(0deg);
  }
}
</style>
