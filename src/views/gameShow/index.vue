

<template>
    <div class="body-container">
        <div class="top">
            {{ title }}
        </div>
        <div class="filter-container">

        </div>
        <div class="gameList">
            <el-table :data="gameList" style="width: 100%" class="gameTable" :row-class-name="tableRowClassName">
                <el-table-column prop="gameName" label="比赛名称" width="500"/>
                <el-table-column prop="registrationTime" label="报名时间" width="280" />
                <el-table-column prop="gameTime" label="比赛时间" width="280" />
                <el-table-column label="操作" width="120" fixed="right">
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
import { ref, reactive } from 'vue'
let title = ref("全国田径竞赛管理信息系统-网上报名平台");

let gameList = reactive([
    {
        gameName: '2023年全国大学生田径锦标赛',
        address: '地点待定',
        registrationTime: '2023-01-01 - 2023-01-31 18:00:00',
        gameTime: '2023-05-01 - 2023-05-05',
        gameLevel: 'III',
        registering: true,
    },
    {
        gameName: '第一届全国学生（青年）运动会（公开组）田径项目（决赛）',
        address: '广西壮族自治区南宁市',
        registrationTime: '2023-01-01 - 2023-01-31 18:00:00',
        gameTime: '2023-05-01 - 2023-05-05',
        gameLevel: 'III',
        registering: false,
    }
])

const tableRowClassName = ({
    row,
    rowIndex,
}: {
    row: any
    rowIndex: number
}) => {
    if (row.registering === true) {
        return 'success-row'
    }
    return ''
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
        height: 100px;
        width: 70%;
        margin: auto;
    }

    .gameList {
        background-color: white;
        width: 70%;
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