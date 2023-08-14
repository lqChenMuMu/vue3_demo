// 通用分页查询参数
export interface pageQueryParams{
    page: number,
    limit: number
}

// 通用返回结果
export interface BaseResponse{
    code: number,
    msg: string | null,
    data: any
}