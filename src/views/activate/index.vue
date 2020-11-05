<template>
  <div class="msg">
    <van-nav-bar
      title="激活授权"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="gain">
      <div class="gain_left">
        <span class="Application">应用激活</span>
        <span class="obtain">获取key</span>
      </div>
      <van-button class="getGain" round type="info" @click="goGain"
        >获取</van-button
      >
    </div>
    <div class="authorization"><span>授权信息</span></div>
    <div class="gain gain_two">
      <div class="gain_left">
        <span class="Application Application_two">技术支持</span>
      </div>
      <span class="Application">正阳商务</span>
    </div>
    <div class="gain gain_three">
      <div class="gain_left">
        <span class="Application">联系方式</span>
      </div>
      <span class="Application">123456789</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider } from "vant";
import { Toast } from "vant";
import { Button } from "vant";
import { Dialog } from "vant";

// 全局注册
Vue.use(Dialog);
// Dialog({ message: "提示" });
Vue.use(Button);
Vue.use(Empty);
Vue.use(Divider);
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  name: "about",
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
    onClickLeft() {
      this.$router.push({ path: "/home" });
    },
    onClickRight() {
      Toast("按钮");
    },
    goGain() {
      Dialog.confirm({
        message: "授权码是123456",
        confirmButtonColor: "#216EF0"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<!-- 框架样式覆盖 -->
<style lang="scss">
.msg {
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar {
    background: linear-gradient(0deg, #1876ff, #2996ff);
    height: 64px;
  }
  .van-icon {
    color: #fff;
  }
  .gain {
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    border-bottom: 1px solid #e6e6e6;
  }
  .gain_left {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .Application {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
  }
  .obtain {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #999999;
  }
  .getGain {
    height: 24px;
    background: linear-gradient(0deg, #1876ff, #2996ff);
    border-radius: 12px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
  .authorization span {
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
    margin-top: 19px;
    padding: 0 12px;
  }
  .gain_two {
    height: 20px;
    border-bottom: none;
    margin-top: 19px;
  }
  .gain_three {
    height: 20px;
    border-bottom: none;
    margin-top: 21px;
  }
  .Application_two {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
  }
  .van-hairline--left {
    color: blue;
  }
}
</style>
<!--页面私有样式 -->
<style scoped lang="scss">
.msg {
  height: 100vh;
  background: #fff;
  .van-dialog__confirm {
    color: #fff;
  }
}
</style>
