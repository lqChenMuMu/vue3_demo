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
      menus: ['home','game','setting','optional','rules'],
      token: 'Admin Token',
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
      menus: ['home'],
      token: 'System Token',
    },
  ]
}

export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return { code: 201, msg: '用户名或密码错误' }
      }
      const { token } = checkUser
      return { code: 0, data: token }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      console.log(`我的token${token}`)
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return { code: 201, msg: '用户信息错误' }
      }
      return { code: 0, data: checkUser }
    },
  },
]
