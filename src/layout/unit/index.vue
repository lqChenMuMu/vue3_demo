
<template>
    <HorizontalMenu :menuList="userStore.userInfo.unitRouters"/>
</template>
<script setup lang='ts'>
import HorizontalMenu from '@/layout/horizontal/index.vue'
import { useUserStore } from '@/store/user';
const userStore = useUserStore()
</script>