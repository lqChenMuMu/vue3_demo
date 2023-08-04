export interface UserInfo {
    token: string | null,
    roles: string[],
    adminMenus: string[],
    managerMenus: string[],
    unitMenus: string[],
    username: string
    avatar: string,
    endpoint: string
}
