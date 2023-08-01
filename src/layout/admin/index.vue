<template>
  <div class="main">
    <div class="layout_left">
      <el-menu>
        <Menu :menuList="userInfo.menus" />
      </el-menu>
    </div>
    <div class="layout_top">
      <Tabbar />
    </div>
    <el-scrollbar class="layout_main">
      <Main></Main>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Tabbar from '@/layout/admin/tabbar/index.vue'
import Menu from './menu/index.vue'
import { useUserStore } from '@/store/user'
import Main from '@/layout/admin/main/index.vue'

const userInfo = useUserStore().userInfo
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
}
</style>
