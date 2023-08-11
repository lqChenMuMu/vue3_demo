

<template>
    <VerticalMenu :menuList="userStore.userInfo.managerRouters"/>
</template>
<script setup lang='ts'>
import VerticalMenu from '@/layout/vertical/index.vue'
import { useUserStore } from '@/store/user';
const userStore = useUserStore()
</script>
<style lang='less' scoped>

</style>