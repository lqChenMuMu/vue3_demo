import { pageQueryParams, BaseResponse, PageResponse } from '@/api/common'

// 赛事查询参数
export interface gameQueryParams extends pageQueryParams {
    gameName: string | null,
    year: number | null,
    month: number | null,
    isOpen: number | null,
    recently: boolean
}

// 赛事信息
export interface game {
        id: number,
        gameName: string,
        gameShortName: string | null,
        ameCode: string,
        matchLevel: string,
        nationType: number | null,
        gameType: number | null,
        areaType: number | null,
        nationGameLevel: string | null,
        departmentName: string,
        sortType: number | null,
        province: string,
        city: string,
        area: string,
        location: string,
        year: number,
        beginTime: string,
        registrationBeginTime: string,
        registrationEndTime: string,
        isOpen: number,
        limitAthleteCount: number,
        gameNote: string,
        registrationWay: number,
        gameNameEng: string,
        gameNameEngShort: string,
        gameAreaEng: string,
        gameSiteEng: string,
        gameLocationEng: string,
        zoneCode: string,
        zoneName: string,
        showCloseTime: string,
        visible: number,
        ruleFileUrl: string,
        noticeFileUrl: string,
        pendingNote: string,
        gameOrder: number,
        gameMainType: string,
        personalRegistrationSwitch: number,
        allowNoRegisterAthlete: number,
        unitRegistrationSwitch: number
        avatarVerifySwitch: number,
        athleteAuditSwitch: number,
        athleteRegistrationSwitch: number,
}

export interface gamePageResponse extends PageResponse<game>{}