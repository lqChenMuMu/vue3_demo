<template>
  <div class="loginContainer">
    <el-row class="loginTop">
      <el-col class="logo" :span="20" :offset="2">
        <img src="@/assets/login/logo.png" />
        <span>全国田径竞赛管理信息系统-网上报名平台</span>
      </el-col>
    </el-row>
    <div class="loginCenter">
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="24" :xs="24">
          <div class="loginArea">
            <!-- 登录赛事信息 -->
            <div class="formLeft formItem">
              <div class="formLeftContent">
                <p class="loginWelcome">欢迎登陆</p>
                <p class="loginGame">
                  中国田径协会2023年体育传统项目学校田径联赛（总决赛）
                </p>
              </div>
            </div>
            <!-- 登录表单 -->
            <div class="formRight formItem">
              <div class="loginBox">
                <div class="loginForm">
                  <el-form ref="refLoginForm" :model="loginForm" :rules="loginRule" size="large">
                    <el-form-item prop="account">
                      <el-input clearable v-model="loginForm.account" placeholder="账号" :prefix-icon="User"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                      <el-input clearable v-model="loginForm.password" show-password placeholder="密码" :prefix-icon="Lock"/>
                    </el-form-item>

                    <el-form-item prop="validCode">
                      <el-input v-model="loginForm.validCode">
                        <template #append>
                          <el-image style="width: 100px; height: 100%" :src="validCodeBase64" fit="contain" @click="getValidCode"/>
                        </template>
                      </el-input>
                    </el-form-item>

                    <el-button class="w-full mt-4" size="default" type="primary" @click="login" :loading="loginLoading">
                      登录
                    </el-button>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="loginFotter">
      <div>
        <p>
          中国田径协会©版权所有 本系统由
          <a href="https://www.fairplay.com.cn" target="_blank">
            深圳市菲普莱体育发展有限公司
          </a>
          提供技术支持
        </p>
        <p class="chrome_down">
          下载chrome浏览器，获得更好的体验 (
          <a href="https://static-global1.nuanshi100.com/ChromeSetup.exe" target="_blank">
            Windows系统
          </a>
          /
          <a href="https://static-global1.nuanshi100.com/googlechrome.dmg" target="_blank">
            Mac系统
          </a>
          )
        </p>
        <p>
          技术支持：座机：0755 - 86379837 - 转605 (工作日 上午 8:30-11:30 下午
          13:30-18:00)
        </p>
        <p class="qq_info">
          <a target="_blank"
            href="//shang.qq.com/wpa/qunwpa?idkey=1d95dc9299192e9467b69ef0dadceb1e82dbeda76002aa7382fbf18eac7abd81">
            <img src="//pub.idqqimg.com/wpa/images/group.png" alt="传统校!体校!俱乐部!技" title="传统校!体校!俱乐部!技" />
          </a>
          <a href="tencent://message/?uin=2957746373&Site=&Menu=yes" target="_blank">
            <img src="@/assets/login/QQ_consult.gif" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { useUserStore } from '@/store/user'
import { useRouter, useRoute } from 'vue-router'
import { validImg } from '@/api/user'

let $router = useRouter()
let $route = useRoute()
// 验证码
const validCodeBase64 = ref('')

// 登录表单
const refLoginForm = ref()
// 登录表单
let loginForm = reactive({
  account: 'admin',
  password: '123456',
  validCode: '',
  validCodeReqNo: '',
})
// 登录按钮loading
let loginLoading = ref(false)
// 登录表单验证
const loginRule = {
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

// 初始化加载
onMounted(() => {
  // 加载验证码
  getValidCode()
  console.log('地址：',import.meta.env.VITE_APP_BASE_API)
})

const getValidCode = () => {
  validImg().then((res) => {
    validCodeBase64.value = res.data.validCodeBase64
    loginForm.validCodeReqNo = res.data.validCodeReqNo
  })
}

// 登录
let login = async () => {
  await refLoginForm.value.validate()
  loginLoading.value = true
  try {
    await useUserStore().userLogin(loginForm)
    //编程式导航跳转到展示数据首页
    //判断登录的时候,路由路径当中是否有query参数，如果有就往query参数挑战，没有跳转到首页
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/home' })
    ElNotification({
      title: 'Success',
      message: `欢迎回来`,
      type: 'success',
    })
    loginLoading.value = false
    getValidCode()
  } catch (e) {
    console.log(e)
    ElNotification({
      title: 'Error',
      message: (e as Error).message,
      type: 'error',
    })
    loginLoading.value = false
    getValidCode()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/login/login.scss';
</style>
