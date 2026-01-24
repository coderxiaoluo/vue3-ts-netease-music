<template>
  <div class="app" v-particle-explosion>
    <!-- 路由展示  -->
    <router-view> </router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { localCache } from './utils/localCache'
import WOW from 'wow.js'
onMounted(() => {
  new WOW().init()
})

document.onselectstart = (e) => e.preventDefault()
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100%;
  // height: 100vh;
}
</style>
