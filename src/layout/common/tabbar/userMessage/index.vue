<template>
  <div class="userMessageContainer">
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <img :src="userAavtar" style="
            width: 26px;
            height: 26px;
            margin: 0px 10px;
            border-radius: 50%;
          " />
        <p>{{ userInfo.username }}</p>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
let userStore = useUserStore()
let userInfo = userStore.userInfo
let userAavtar = userInfo.avatar ? userInfo.avatar : '/src/assets/avatar.jpeg'

//退出登录点击回调
const logout = async () => {
    //第一件事情:需要向服务器发请求[退出登录接口]******
    //仓库当中关于用于相关的数据清空[token|username|avatar]
    await userStore.userLogout();
}
</script>

<script lang="ts">
export default {
  name: 'UserMessage',
}
</script>

<style lang="scss" scoped>
.userMessageContainer {
  width: 100%;
  height: $layout-header-height;
  display: flex;
  justify-content: flex-end;

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }

  p {
    color: white;
  }
}
</style>
