// 通用分页查询参数
export interface pageQueryParams{
    current: number,
    size: number
}

// 通用返回结果
export interface BaseResponse{
    code: number,
    msg: string | null,
    data: any
}

export interface PageResponse<T> extends BaseResponse{
    data: {
        total: number,
        current: number,
        size: number,
        records: T[]
    }
}