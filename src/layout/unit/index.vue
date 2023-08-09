
<template>
    <HorizontalMenu :menuList="userInfo.unitMenus"/>
</template>
<script setup lang='ts'>
import HorizontalMenu from '@/layout/horizontal/index.vue'
import { useUserStore } from '@/store/user';
const userInfo = useUserStore().userInfo
</script>