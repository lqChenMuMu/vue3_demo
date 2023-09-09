

<template>
    <div class="body-container">
        <div class="top">
            {{ title }}
        </div>
        <div class="filter-container">
            <el-space wrap="" :size="20">
                <el-select v-model="searchParams.year" class="m-1" placeholder="Select" size="large" id="yearSelect"
                    @change="gameShow">
                    <template #prefix>
                        <div class="filter-label">
                            年份
                        </div>
                    </template>
                    <el-option v-for="year in yearOptional" :label="year" :value="year" :key="year" />
                </el-select>
                <el-select v-model="searchParams.month" clearable class="m-1" placeholder="" size="large" @change="gameShow">
                    <template #prefix>
                        <div class="filter-label">
                            月份
                        </div>
                    </template>
                    <el-option v-for="month in monthptional" :label="month" :value="month" :key="month" />
                </el-select>
            </el-space>
        </div>
        <div class="gameList">
            <el-table :data="gameList" style="width: 100%" class="gameTable" v-loading="loading">
                <el-table-column label="比赛名称" width="550">
                    <template #default="scope">
                        <el-link type="primary" @click="toLogin(scope.row.gameCode)">{{ scope.row.gameName }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="比赛地点" width="300" />
                <el-table-column prop="registrationTime" label="报名时间" width="200" />
                <el-table-column prop="gameTime" label="比赛时间" width="150" />
                <el-table-column label="操作" width="120">
                    <template #default="scope">
                        <el-button v-if="scope.row.registering" link type="primary" size="small">点击报名</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang='ts'>
import svgIcon from "@/components/SvgIcon/index.vue"
import { ref, reactive, onMounted } from 'vue'
import { getGameShow } from "@/api/index/index"
import { gameShow } from "@/api/index/types"
import { useRoute, useRouter } from "vue-router"
let router = useRouter();
let title = ref("全国田径竞赛管理信息系统-网上报名平台");
let gameList = ref<gameShow[]>()
let loading = ref(false)
let yearOptional = reactive([2023, 2022, 2021, 2020, 2019])
let monthptional = reactive(['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
let searchParams = reactive({
    year: 2023,
    month: ''
})

// --------------------------------------------------
onMounted(() => {
    gameShow();
})

function gameShow() {
    loading.value = true;
    getGameShow(searchParams).then(res => {
        gameList.value = res;
    }).finally(() => {
        loading.value = false;
    })
}

function toLogin(gameCode: string){
    router.push({
        path: '/login',
        query: {
            gameCode: gameCode
        }
    })
}

</script>

<style lang='scss' scoped>
.body-container {
    height: 100vh;
    background-color: $background-color;

    .top {
        background-color: $primary-color;
        height: 70px;
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
        line-height: 70px;
        padding-left: 2%;
        width: 100vw;
    }

    .filter-container {
        background-color: white;
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        padding: 20px;

        .filter-label {
            background-color: #337ecc;
            width: 50px;
            font-weight: bold;
            color: white;
        }
    }


    .gameList {
        background-color: white;
        width: 80%;
        margin: auto;
        margin-top: 10px;
        height: calc(100vh - 210px);
        padding: 10px;

        .gameTable {
            height: calc(100vh - 230px);
        }

        tr.el-table__row.success-row {
            background-color: #ecf5ff;
        }
    }
}

@media only screen and (max-width: 800px) {
    .filter-container {
        width: 100vw !important;
    }

    .gameList {
        width: 100vw !important;
    }

}
</style>