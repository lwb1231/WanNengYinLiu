<template>
  <div class="msg">
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="WeChat">
      <img src="../../assets/img//icon_yinliu1.png" alt="" />
      <span class="WeChat-title">微引流</span>
      <span class="WeChat-versions">版本号1.0 </span>
    </div>
    <div class="introduce">
      微引流是通过时间沉淀，实操实践开发的一款软件，更加的智能、精准、高效、安全。微引流软件是一款自动引流涨粉拓客的营销工具。
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider } from "vant";
import { Toast } from "vant";

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
    goDetail() {},
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
  .WeChat {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 42px;
    padding: 0 12.5px;
  }
  .WeChat img {
    width: 57px;
    height: 56px;
  }
  .WeChat-title {
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 20px;
    margin-top: 3.5px;
    margin-bottom: 1px;
  }
  .WeChat-versions {
    height: 11px;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 20px;
  }
  .introduce {
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 21px;
    margin-top: 41.5px;
    padding: 0 12.5px;
  }
}
</style>
<!--页面私有样式 -->
<style scoped lang="scss">
.msg {
  height: 100vh;
  background: #fff;

  /* ul {
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 14px;

    li {
      margin: 0px 0 15px;
      padding: 0 0 15px;
      border-bottom: 1px solid #f1f1f1;

      p {
        clear: both;
        font-size: 14px;
        color: #969799;
      }

      strong {
        font-size: 12px;
        color: #c8c9cc;
      }

      span {
        margin: 5px 0;
        float: right;
        font-size: 12px;
      }
    }
  } */
}
</style>
