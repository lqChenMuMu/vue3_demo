<template>
  <div style="width: 100vw">

    <el-row>
      <!-- 左侧赛事名称 -->
      <el-col :span="12">
        <h2>菲普莱赛事</h2>
      </el-col>
      <!-- 右侧消息栏 -->
      <el-col :span="12" class="userMessageContainer">
        <UserMessage />
      </el-col>
    </el-row>

  </div>
</template>

<script setup lang="ts">
import UserMessage from './userMessage/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style lang="scss" scoped>
h2{
  line-height: $layout-header-height;
  color: white;
}
.userMessageContainer{
  display: flex;
  align-items: center;
}
</style>
