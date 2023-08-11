// 通用分页查询参数
export interface pageQueryParams{
    page: number,
    limit: number
}

// 通用返回结果
export interface BaseResponse<T>{
    code: number,
    msg: string | number,
    data: T
}