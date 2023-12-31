function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '123456',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      adminMenus: ['home', 'game', 'setting', 'optional', 'rules'],
      managerMenus: ['manager_home','manager_unit'],
      token: 'Admin Token',
      endpoint: 'admin'
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      adminMenu: [],
      managerMenus: ['manager_home'],
      token: 'System Token',
      endpoint: 'manager'
    },
    {
      userId: 3,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'unit',
      password: '123456',
      desc: '单位',
      roles: ['单位'],
      buttons: ['cuser.detail', 'cuser.user'],
      adminMenu: [],
      managerMenus: [],
      unitMenus:['unit_home','unit_person_event'],
      token: 'Unit Token',
      endpoint: 'unit'
    },
  ]
}

export default [
  // 用户登录接口
  {
    url: '/auth/login',
    method: 'post',
    response: ({ body }) => {
      const { account, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === account && item.password === password,
      )
      if (!checkUser) {
        return { code: 201, msg: '用户名或密码错误' }
      }
      const { token } = checkUser
      return { code: 200, data: token }
    },
  },
  // 获取用户信息
  {
    url: '/auth/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      console.log(`我的token${token}`)
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return { code: 201, msg: '用户信息错误' }
      }
      return { code: 200, data: checkUser }
    },
  },
  // 退出登录
  {
    url: '/auth/logout',
    method: 'post',
    response: () => {
      return { code: 0, data: 'success' }
    },
  },
  // 验证码
  {
    url: '/auth/getPicCaptcha',
    method: 'get',
    response:() => {
      return {code: 200, data: {validCodeBase64: '', validCodeReqNo: '1234'}}
    }
  }
]
