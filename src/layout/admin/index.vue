
<template>
    <VerticalMenu :menuList="userStore.userInfo.adminRouters"/>
</template>



<script setup lang='ts'>
import VerticalMenu from '@/layout/vertical/index.vue'
import { useUserStore } from '@/store/user';

let userStore = useUserStore()

</script>
<style lang='less' scoped></style>