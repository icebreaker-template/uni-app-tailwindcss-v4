<template>
  <view class="flex flex-col items-center justify-center space-y-4">
    <image class="w-20 h-20 mt-4" src="/static/logo.png" />
    <view class="text-area">
      <text class="text-[#00f285] text-[88rpx] font-bold underline">{{ title }}</text>
    </view>
    <view :class="className" class="text-white rounded-md">
      欢迎使用 weapp-tailwindcss uni-app 模板
    </view>
    <view class="text-green/90">
      text-green/90
    </view>
    <view class="text-[#ff5454]/90">
      text-[#ff5454]/90
    </view>
    <view :class="className2">
      {{ className2 }}
    </view>
    <view :class="className3">
      {{ className3 }}
    </view>
    <view>
      <IceButton custom-class="bg-amber-600">
        按钮示例
      </IceButton>
      <IceInput v-model="motto" />
    </view>

  </view>
</template>

<script setup lang="ts">
import IceButton from '@/components/IceButton.vue'
import IceInput from '@/components/IceInput.vue'
import { ref, watch } from 'vue'
const title = ref('Hello')
const className = ref('bg-[#00aa55] mb-[20rpx] p-[20rpx]')
const motto = ref('Hello World!')
const className2 = ref('text-green/80')
const className3 = ref('text-[#00aa55]/80')

watch(() => motto.value, () => {
  console.log(motto.value)
})
</script>

<style>
.text-area {
  padding: 40rpx;
}
</style>