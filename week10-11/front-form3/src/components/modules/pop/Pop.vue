<template>
  <div class="tips animation" :class="{'shake': type==='shake'}" v-show="isShow" ref="tips">
    <div class="content">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'pop',
  props: {
    type: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow (newval, oldval){
      if(newval !== oldval && newval === true){
        // 显示pop组件
        setTimeout(() => {
          // pop组件高宽
          let height = this.$refs.tips.clientHeight
          let width = this.$refs.tips.clientWidth
          // 让他居中
          this.$refs.tips.style.marginLeft = -width / 2 + 'px'
          this.$refs.tips.style.marginTop = -height / 2 + 'px'
        }, 0)
        setTimeout(() => {
          this.isShow = false
          this.msg = ''
          this.type = ''
        }, 3000)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@keyframes shake {
    0%, 100%{
      transform: translate(0); 
    }
    10%, 30%, 50%, 70%, 90%{
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80%{
      transform: translateX(10%);
    }
}
.tips{
  position: fixed;
  top: 50%;
  left: 50%;
}
.animation{
  animation-fill-mode: both;
  animation-duration: .3s;
}
.content{
  background: rgba(0,0,0,0.4);
  color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
}
.shake{
  animation-name: shake;
}
</style>
