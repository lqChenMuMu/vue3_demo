<template>
  <div class="search_container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input
          v-model="formInline.user"
          placeholder="Approved by"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="formInline.region"
          placeholder="Activity zone"
          clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formInline.date"
          type="date"
          placeholder="Pick a date"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="handle_container">
    <el-button type="primary">新增</el-button>
    <el-button type="primary" plain>组委会账号</el-button>
    <el-button type="primary" plain>管理员账号</el-button>
    <el-button type="info" plain>人数统计表</el-button>
  </div>

  <div class="content_table_container">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default>
          <el-button link type="primary" size="small">修改</el-button>
          <el-button link type="danger" size="small">删除</el-button>
          <el-button link type="primary" size="small">复制</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { CirclePlus, EditPen, Delete } from '@element-plus/icons-vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
  padding: 10px 10px 10px 0;
  
  button {
    margin-right: 8px;
    margin-bottom: 10px;
  }
  .el-button+.el-button {
    margin-left: 0;
}
}
</style>