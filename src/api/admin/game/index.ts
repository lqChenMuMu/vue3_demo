// 查询比赛信息
import request from '@/utils/request';
import { gamePageResponse, gameQueryParams } from './type'

enum API {
    PAGE_LIST_URL = '/admin/game/page',
}

export const pageList = (data: gameQueryParams) =>
    request.request<gameQueryParams,gamePageResponse>({
        method: 'get',
        url: API.PAGE_LIST_URL,
        params: data,
    })