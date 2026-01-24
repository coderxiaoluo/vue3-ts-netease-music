<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏组件 -->
      <el-aside :width="isFold ? '60px' : '220px'">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 顶部组件 -->
          <Header></Header>
        </el-header>
        <!-- 主体内容 -->
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
    <!-- 底部 -->
    <BottomControl />
    <!-- 唱片 -->
    <el-drawer class="drawer" v-model="isRecordPage" direction="btt" :show-close="false" :with-header="false"
      size="100%" :z-index="76">
      <Record v-show="true" />
    </el-drawer>

    <!-- 弹窗 -->

    <el-dialog class="homeDialog" v-model="dialogVisible" append-to-body title="欢迎来到小罗音乐" width="30%" center
      destroy-on-close>
      <div class="box">
        <p>此项目仅供学习</p>
        <p>原创不易,希望点个start</p>
        <p>
          源码地址:
          <a href="https://github.com/coderxiaoluo" target="_blank">https://github.com/coderxiaoluo</a>
        </p>
        <p></p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"> 关闭 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 顶部组件
import Header from '@/components/header/header.vue'
// 侧边栏组件
import Aside from '@/components/aside/aside.vue'
// 主体组件
import Main from '@/components/main/Main.vue'
// 底部
import BottomControl from '@/components/bottomcontrol/bottom-control.vue'
// 唱片
import Record from './record/record.vue'
// 拿到store
import { useSettingStore } from '@/stores/setting'
import { storeToRefs } from 'pinia'
import { useRecommendStore } from '@/stores/recommend'
// 唱片store
import { useRecordStore } from '@/stores/record'

// 存储
import { localCache } from '@/utils/localCache'

const recordStore = useRecordStore()

// 判断侧边栏展开
const settingStore = useSettingStore()
const { isFold } = storeToRefs(settingStore)

// 发送banner轮播图请求  也可以直接再个性推荐组件中发送，但每次切换都会发送一次，消耗性能
const recommendStore = useRecommendStore()
recommendStore.getBannerDataAction()
recommendStore.getRelatedDataListAction()

const { isRecordPage } = storeToRefs(recordStore)

// 弹窗
const UserLogo = ref(localCache.getCache('UserLogo'))
const dialogVisible = ref(true)
if (UserLogo.value) dialogVisible.value = false
// 表示登录过 用来展示第一次弹框
if (!localCache.getCache('UserLogo')) localCache.setCache('UserLogo', 'xiaoluoMusic')
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;
  }

  // 顶部
  .el-header {
    padding: 0;
    background-color: var(--music-bgc-primary);
  }

  // 侧边栏
  .el-aside {
    height: 100%;
    background-color: var(--music-aside-bgc);
    transition: all 0.3s ease-in-out; // 缩短过渡动画时长，使用更平滑的缓动函数
  }

  // 主体
  .el-main {
    padding: 0;
  }
}

:deep(.drawer) {
  --el-drawer-padding-primary: 0 !important;
}

:deep(.el-drawer__body) {
  --el-drawer-padding-primary: 0 !important;
}

.box {
  p {
    margin: 10px 0;
  }
}
</style>
