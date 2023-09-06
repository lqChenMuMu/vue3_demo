<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.3s;
}

/* 可能为enter失效，拆分为 enter-from和enter-to */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
