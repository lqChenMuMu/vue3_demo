

<template>
    <VerticalMenu :menuList="userInfo.managerMenus"/>
</template>
<script setup lang='ts'>
import VerticalMenu from '@/layout/vertical/index.vue'
import { useUserStore } from '@/store/user';
const userInfo = useUserStore().userInfo
</script>
<style lang='less' scoped>

</style>