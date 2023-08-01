<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 没有子路由 -->
    <template v-if="!menu.children">
      <el-menu-item :index="menu.path" v-if="!menu.meta.hidden" @click="go">
        <template #title>
          <el-icon>
            <component :is="menu.meta.icon"></component>
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有且只有一个子路由 -->
    <template v-if="menu.children && menu.children.length == 1">
      <el-menu-item
        :index="menu.children[0].path"
        v-if="!menu.children[0].meta.hidden"
        @click="go"
      >
        <template #title>
          <el-icon>
            <component :is="menu.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ menu.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有且有多个子路由 -->

    <el-sub-menu
      v-if="menu.children && menu.children.length > 1"
      :index="menu.path"
    >
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <Menu :menuList="menu.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
defineProps(['menuList'])

let $router = useRouter()
const go = (vc: any) => {
  $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<style scoped lang='scss'>
</style>