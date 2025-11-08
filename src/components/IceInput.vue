<template>
    <view>
        <input v-model="model"></input>
    </view>
</template>

<script setup lang="ts">

const model = defineModel()
const weappTwIgnore = String.raw

const world = {
    Accept: `text/event-stream`,
}
console.log(world)
</script>

<style scoped></style>