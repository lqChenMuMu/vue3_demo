import request from "@/utils/request";
import { gameShow, gameQueryParams, loginGameInfo } from "./types";

export const getGameShow = (req: gameQueryParams) => {
    return request.request<gameQueryParams,gameShow[]>({
        method: 'get',
        url: '/common/gameList',
        params: req,
    })
}

export const getLoginGameInfo = (gameCode: string | null) => {
    return request.request<string,loginGameInfo>({
        method: 'get',
        url: '/common/loginGameInfo',
        params: {
            gameCode: gameCode
        }
    })
}