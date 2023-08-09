<template>
  <div class="main">
    <div class="layout_left" :class="{ fold: isCollapse ? true : false }">
      <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="$route.path">
        <Menu :menuList="menuList" />
      </el-menu>
      <div class="menuCollapse" :class="{ fold: isCollapse ? true : false }">
        <el-icon size="1.3rem" @click="isCollapse = !isCollapse">
          <Fold />
        </el-icon>
      </div>
    </div>
    <div class="layout_top">
      <Tabbar />
    </div>
    <el-scrollbar class="layout_main" :class="{ fold: isCollapse ? true : false }">
      <Main></Main>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Tabbar from '@/layout/common/tabbar/index.vue'
import Menu from '@/layout/common/menu/index.vue'
import { useUserStore } from '@/store/user'
import Main from '@/layout/common/main/index.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const userInfo = useUserStore().userInfo
const $router = useRoute()
let isCollapse = ref(false)

defineProps(['menuList'])
</script>

<style scoped lang="scss">
.main {
  background-color: $background-color;
}

.layout_left {
  background-color: $layout-sider-background;
  width: $layout-sider-width;
  position: fixed;
  top: $layout-header-height;
  height: calc(100vh - $layout-header-height);

  .menuCollapse {
    width: $layout-sider-width;
    height: 5vh;
    position: fixed;
    bottom: 0;
    border-top: rgb(233, 233, 233) solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: ($layout-sider-width * 0.8);

    &.fold {
      width: $layout-sider-min-width;
      padding-left: 0;
    }
  }

  &.fold {
    width: $layout-sider-min-width;
  }
}

.layout_top {
  padding: 0.5rem;
  background-color: $primary-color;
  width: 100%;
  height: $layout-header-height;
  display: flex;
  align-items: center;
}

.layout_main {
  background-color: $background-color;
  width: calc(100vw - $layout-sider-width);
  height: calc(100vh - $layout-header-height);
  position: relative;
  left: $layout-sider-width;
  padding: 10px;

  &.fold {
    width: calc(100vw - $layout-sider-min-width);
    left: $layout-sider-min-width;
  }
}
</style>
