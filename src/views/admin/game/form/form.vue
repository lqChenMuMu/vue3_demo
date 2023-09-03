<template>
    <el-form :model="game" label-width="120px">
        <el-form-item label="比赛名称">
            <el-input v-model="game.gameName" />
        </el-form-item>
        <el-form-item label="国际等级">
            <el-select v-model="game.region" placeholder="请选择">
                <el-option v-for="matchLevel in matchLevelEnum" :key="matchLevel" :label="matchLevel" :value="matchLevel" />
            </el-select>
        </el-form-item>
        <el-form-item label="赛事时间">
            <el-col :span="11">
                <el-date-picker v-model="game.beginTime" type="date" placeholder="赛事开始时间" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="game.endTime" placeholder="赛事结束时间" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="报名时间">
            <el-col :span="11">
                <el-date-picker v-model="game.registrationBeginTime" type="date" placeholder="报名开始时间" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="game.registrationEndTime" placeholder="报名结束时间" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="允许非注册报名">
            <el-switch v-model="game.allowAthleteRegister" />
        </el-form-item>
        <el-form-item label="国内国外">
            <el-radio-group v-model="game.resource">
                <el-radio label="国内" />
                <el-radio label="国外" />
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import { matchLevelEnum } from '@/constants/enums'
defineProps(['game'])
</script>
