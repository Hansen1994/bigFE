<template>
<div class="layui-container fly-marginTop">
  <div class="fly-panel fly-panel-user" pad20>
  <div class="layui-tab layui-tab-brief" lay-filter="user">
    <ul class="layui-tab-title">
      <li class="layui-this">
        <router-link :to="{name: 'login'}">忘记密码</router-link>
      </li>
      <li>
        找回密码
      </li>
    </ul>
  <div class="layui-form layui-form-pane">
    <form method="post">
      <div class="layui-form-item">
        <label for="L_email" class="layui-form-label">邮箱</label>
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <div class="layui-input-inline">
            <input type="text" id="L_email" name="email" v-model="email" autocomplete="off" placeholder="请输入您的邮箱噢！" class="layui-input">
          </div>
          <div class="layui-form-mid error">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <label for="L_vercode" class="layui-form-label">验证码</label>
        <ValidationProvider rules="required|code" v-slot="{ errors }">
          <div class="layui-input-inline">
            <input type="text" id="L_vercode" name="code" v-model="code" placeholder="输入验证码" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid error">
            <span>{{errors[0]}}</span>
          </div>
          <div class="layui-form-mid svg">
            <span v-html="svg" @click="_getCode()"></span>
          </div>
        </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <button type="button" class="layui-btn" alert="1" @click="submit" lay-filter="*" lay-submit>提交</button>
      </div>
    </form>
  </div>
</div>
  </div>
</div>
</template>

<script>
import { getCode } from '@/api/getChapcha'
import { forget } from '@/api/forget'
export default {
  name: 'forget',
  data () {
    return {
      email: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode().then((res) => {
        // console.log(res)
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    submit () {
      forget({
        email: this.email,
        code: this.code
      }).then((res) => {
        console.log(res)
        if (res.code === 200) {
          alert('发送邮件成功')
        }
      })
    }
  }
}

</script>

<style>
.error{
  color: red;
}
.svg{
  position: relative;
  top: -18px;
}
</style>
