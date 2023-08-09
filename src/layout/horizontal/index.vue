<template>
  <div class="main">
    <div class="layout_top">
      <Tabbar />
    </div>
    <div class="layout_menu" :class="{ fold: isCollapse ? true : false }">
      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="$route.path"
        mode="horizontal"
      >
        <Menu :menuList="menuList" />
      </el-menu>
    </div>
    <el-scrollbar
      class="layout_main"
      :class="{ fold: isCollapse ? true : false }"
    >
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

.layout_menu {
  background-color: $layout-sider-background;
  width: 100%;
  height: $layout-menu-height;
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
  width: 100%;
  height: calc(100vh - $layout-header-height - $layout-menu-height);
  top: 0;
  position: relative;
  padding: 10px;
}
</style>
