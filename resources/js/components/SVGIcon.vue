<template>
    <svg-vue :icon="iconStyle+'/'+icon" class="w-10" :class="iconStyle"></svg-vue>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        iconStyle: {
            type: String,
            default: 'square-o',
        },
    },
}
</script>
