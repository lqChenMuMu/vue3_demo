import { pageQueryParams} from '@/api/common'

// 赛事查询参数
export interface gameQueryParams extends pageQueryParams{
    page: number,
    limit: number,
    gameName: string | null,
    year: number | null,
    month: number | null,
    isOpen: number | null,
    currentGame: boolean
}

// 赛事信息
export interface game{
    gameId: number,
    gameName: string,
    isOpen: number,
    gameType: number,
    signUpTime: string,
    closeTime: string,
    beginTime: string,
    endTime: string,
    address: string,
}