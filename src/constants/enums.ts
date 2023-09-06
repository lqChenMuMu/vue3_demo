// 赛事开放状态
export const isOpenEnum = [
    {
        code: 1,
        desc: "开放"
    },
    {
        code: 0,
        desc: "关闭"
    },
    {
        code: -1,
        desc: "推迟"
    },
    {
        code: -2,
        desc: "取消"
    },
    {
        code: -3,
        desc: "地点待定"
    },
    {
        code: -4,
        desc: "时间待定"
    },
    {
        code: -5,
        desc: "时间和地点待定"
    },
    {
        code: -6,
        desc: "待定"
    },
    {
        code: -7,
        desc: "关闭打印"
    }
]

// 赛事所属部门
export const departmentNameEnum = [
    "青少部",
    "竞赛部",
    "其他"
]

// 赛事类型
export const gameTypeEnum = [
    {
        code: 0,
        desc: "场地赛"
    },
    {
        code: 1,
        desc: "室内赛"
    },
    {
        code: 2,
        desc: "竞走"
    },
    {
        code: 3,
        desc: "越野"
    },
    {
        code: 4,
        desc: "马拉松"
    },
    {
        code: 5,
        desc: "综合"
    },
    {
        code: -1,
        desc: "其他"
    }
]

// 赛事登记
export const matchLevelEnum = [
    'OW', 'DF', 'GW', 'GL', 'A', 'B', 'C', 'D', 'E', 'F'
]
