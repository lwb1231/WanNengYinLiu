<template>
  <div class="msg">
    <van-nav-bar
      title="用户设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="setting">设置</div>
    <div class="gain">
      <div class="gain_left">
        <span class="Application">权限设置</span>
        <span class="obtain">无障碍模式开关</span>
      </div>
      <van-switch v-model="checked" size="24px" />
    </div>
    <div class="gain">
      <div class="gain_left">
        <span class="Application">系统配置</span>
        <span class="obtain">营销话术</span>
      </div>
      <div class="gain_img">
        <img src="../../assets/img/icon_xuanze.png" alt="" />
      </div>
    </div>
    <div class="gain">
      <div class="gain_left">
        <span class="Application">清理缓存</span>
      </div>
      <div class="gain_img">
        <span>一键清理</span>
        <img src="../../assets/img/icon_xuanze.png" alt="" />
      </div>
    </div>
    <div class="setting">信息</div>

    <div class="gain">
      <div class="gain_left">
        <span class="Application">下载微信</span>
      </div>
      <div class="gain_img">
        <span>立即下载</span>
        <img src="../../assets/img/icon_xuanze.png" alt="" />
      </div>
    </div>
    <div class="gain">
      <div class="gain_left">
        <span class="Application">微信版本</span>
      </div>
      <div class="gain_img">
        <span>7.0.19</span>
      </div>
    </div>
    <div class="gain">
      <div class="gain_left">
        <span class="Application">软件版本</span>
      </div>
      <div class="gain_img">
        <span>undefined</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider } from "vant";
import { Toast } from "vant";
import { Switch } from "vant";

Vue.use(Switch);
Vue.use(Empty);
Vue.use(Divider);
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  name: "about",
  data() {
    return {
      checked: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
    goDetail() {
      this.$router.push({ path: "/newsDetail" });
    },
    onClickLeft() {
      this.$router.push({ path: "/home" });
    },
    onClickRight() {
      Toast("按钮");
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
    margin-top: 8px;
  }
  .van-button {
    height: 24px;
    background: linear-gradient(0deg, #1876ff, #2996ff);
    border-radius: 12px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
  .setting {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    margin: 12px 0 0 12px;
  }
  .gain_img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gain_img img {
    width: 6px;
    height: 11px;
  }
  .gain_img span {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #999999;
    margin-right: 7px;
  }
}
</style>
<!--页面私有样式 -->
<style scoped lang="scss">
.msg {
  height: 100vh;
  background: #fff;
}
</style>
