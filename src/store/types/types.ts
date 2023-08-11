export interface UserInfo {
    token: string | null,
    roles: string[],
    // 菜单权限
    adminMenus: string[],
    managerMenus: string[],
    unitMenus: string[],
    // 菜单路由
    adminRouters: string[],
    managerRouters: string[],
    unitRouters: string[],
    hasRouter: boolean,
    username: string | null,
    avatar: string,
    endpoint: string
}
