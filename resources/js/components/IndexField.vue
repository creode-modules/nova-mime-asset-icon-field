<template>
    <SVGIcon :icon="fieldValue" icon-style="square-o" />
</template>

<script>
import SVGIcon from './SVGIcon'
export default {
  props: ['resourceName', 'field'],
  components: {
    SVGIcon,
  },

  computed: {
    fieldValue() {
        return this.field.displayedAs || this.field.value
    },
  },

}
</script>
