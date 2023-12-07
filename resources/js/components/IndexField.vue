<template>
    <img :src="fieldValue" alt="" width="40" height="40">
</template>

<script>
export default {
  props: ['resourceName', 'field'],

  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  },

}
</script>
