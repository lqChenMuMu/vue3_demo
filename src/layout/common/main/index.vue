<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>
<script lang="ts">
export default {
  name: 'Main',
}
</script>
<style scoped lang='scss'></style>