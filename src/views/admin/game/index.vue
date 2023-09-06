<template>
  <!-- 搜索区 -->
  <div class="search_container">
    <el-form :inline="true" :model="searchParams" class="demo-form-inline">
      <el-form-item class="searchFormItem">
        <el-select v-model="searchParams.year" placeholder="年" clearable>
          <el-option v-for="year in searchOptions.years" :label="year" :value="year" />
        </el-select>
      </el-form-item>
      <el-form-item class="searchFormItem">
        <el-select v-model="searchParams.month" placeholder="月" clearable>
          <el-option v-for="month in searchOptions.months" :label="month" :value="month" />
        </el-select>
      </el-form-item>
      <el-form-item class="searchFormItem">
        <el-select v-model="searchParams.isOpen" placeholder="报名状态" clearable>
          <el-option v-for="isOpen in isOpenEnum" :label="isOpen.desc" :value="isOpen.code" />
        </el-select>
      </el-form-item>
      <el-form-item class="searchFormItem">
        <el-input v-model="searchParams.gameName" placeholder="赛事名称" clearable />
      </el-form-item>
      <el-form-item class="searchFormItem">
        <el-checkbox v-model="searchParams.recently">近期赛事</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="gamePageQuery">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <!-- 功能区 -->
  <div class="handle_container">
    <div class="handle_container_left">
      <el-button type="primary" plain>组委会账号</el-button>
      <el-button type="primary" plain>管理员账号</el-button>
      <el-button type="info" plain>人数统计表</el-button>
    </div>

    <div class="handle_container_right">
      <el-button type="primary" @click="openDialogAdd">新增</el-button>
    </div>
  </div>

  <!-- 表格 -->
  <div class="content_table_container">
    <el-table :data="tableData" border style="width: 100%" table-layout="auto" size="large"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }" v-loading="tableLoading">
      <el-table-column prop="gameName" label="比赛名称" />
      <el-table-column prop="isOpen" label="报名状态" width="90" :formatter="isOpenFormat" />
      <el-table-column prop="gameType" label="赛事类型" width="90" :formatter="gameTypeFormat" />
      <el-table-column prop="registrationBeginTime" label="报名开始时间" width="170" :formatter="registrationBeginTimeFormat"/>
      <el-table-column prop="registrationEndTime" label="报名结束时间" width="170" :formatter="registrationEndTimeFormat"/>
      <el-table-column prop="beginTime" label="赛事开始时间" width="170" :formatter="beginTimeFormat"/>
      <el-table-column prop="endTime" label="赛事结束时间" width="170" :formatter="endTimeFormat"/>
      <el-table-column prop="location" label="地点" width="100" />
      <el-table-column prop="gameId" label="进入">
        <template #default="{ row }">
          <!-- <router-link :to="{ path: '/manager/home' }" target="_blank">进入</router-link> -->
          <el-button @click="entranceGame(row.id)" type="primary" size="small">进入</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
          <el-button link type="primary" size="small" @click="openDialogEdit">修改</el-button>
          <el-button link type="danger" size="small">删除</el-button>
          <el-button link type="primary" size="small">复制</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="paginationContainer">
      <el-pagination background layout="total, sizes, prev, pager, next" :total="gameTotal"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>

  <!-- 新增/修改弹窗 -->
  <el-dialog
    v-model="dialogVisible"
    :title="dialogTitle"
    width="40%"
    :before-close="handleClose"
  >
    <GameForm v-model:game="gameForm"></GameForm>
    <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="onSubmit">
                确定
            </el-button>
        </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import router from '@/router'
import GameForm from './form/form.vue'
import { pageList } from '@/api/admin/game';
import { game } from '@/api/admin/game/type';
import { isOpenEnum, gameTypeEnum } from '@/constants/enums'

const searchOptions = {
  years: [2023, 2022, 2021, 2020, 2019],
  months: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ],
}

const searchParams = reactive({
  year: searchOptions.years[0],
  month: null,
  isOpen: 1,
  gameName: '',
  recently: false,
  size: 10,
  current: 1
})

const gameForm = reactive({
  gameName: '哈哈哈',
  isOpen: 1,
  gameType: 1,
  registrationBeginTime: '',
  registrationEndTime: '',
  beginTime: '',
  endTime: '',
  location: '',
  gameId: ''
})
const dialogVisible = ref(false)
const dialogTitle = ref('新增赛事')

let tableData = ref<game[]>();
let gameTotal = ref()
let tableLoading = ref(false)

onMounted(() => {
  gamePageQuery();
})

const gamePageQuery = () => {
  tableLoading.value = true
  pageList(searchParams).then((res) => {
    tableData.value = res.data.records
    gameTotal.value = res.data.total
  })
  tableLoading.value = false
}

function handleSizeChange(size: number) {
  searchParams.size = size
  gamePageQuery()
}

function handleCurrentChange(current: number) {
  searchParams.current = current
  gamePageQuery()
}

const handleClose = (done: any) => {
  dialogVisible.value = false
  done()
}

const openDialogAdd = () => {
  dialogTitle.value = '新增赛事'
  dialogVisible.value = true
}

const openDialogEdit = (row: any) => {
  dialogTitle.value = '修改赛事'
  dialogVisible.value = true
}

const onSubmit = () => {
  console.log('submit!')
  alert(gameForm.gameName);
}

const entranceGame = (gameId: number) => {
  let newUrl = router.resolve({
    path: "/manager/home",
  });
  window.open(newUrl.href, "_blank");
}

// table format
const isOpenFormat = (row: any) => {
  return isOpenEnum.find((item) => item.code === row.isOpen)?.desc
}

const gameTypeFormat = (row: any) => {
  return gameTypeEnum.find((item) => item.code === row.gameType)?.desc
}

const registrationBeginTimeFormat = (row: any) => {
  return row.registrationBeginTime.replace('00:00:00', '')
}
const registrationEndTimeFormat = (row: any) => {
  return row.registrationEndTime.replace('00:00:00', '')
}
const beginTimeFormat = (row: any) => {
  return row.beginTime.replace('00:00:00', '')
}
const endTimeFormat = (row: any) => {
  return row.endTime.replace('00:00:00', '')
}

</script>
<style scoped lang='scss'>
.search_container {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px 10px 0 10px;
  border-radius: 2px;
}

.content_table_container {
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
}

.handle_container {
  background-color: white;
  padding: 10px 10px 0px 10px;
  height: 55px;

  .handle_container_left {
    float: left;
  }

  .handle_container_right {
    float: right;
  }
}

.searchFormItem {
  width: 120px;
  margin-right: 10px;
}

.paginationContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>