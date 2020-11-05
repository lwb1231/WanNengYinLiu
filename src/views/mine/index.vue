<template>
  <div class="msg">
    <van-nav-bar
      title="话术设置"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="configuration">
      <div class="configuration_title">话术配置说明</div>
      <div class="num">
        1234579954851478899621478898652122368852222666666669985252122233333332245966322221234579954851478899621478898652122368852222666
      </div>
    </div>
    <div class="comment">
      <span>评论话术</span>
      <img src="../../assets/img/icon_xinghao.png" alt="" />
    </div>
    <div class="configuration configuration_two">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请填写需要评论的话术.."
        placeholder-style="color:red"
      ></textarea>
    </div>
    <div class="comment">
      <span>私信话术</span>
      <img src="../../assets/img/icon_xinghao.png" alt="" />
    </div>
    <div class="configuration configuration_three">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请填写需要私信的话术.."
        placeholder-style="color:red"
      ></textarea>
    </div>
    <van-button type="primary" size="large">保存并返回</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider } from "vant";
import { Toast } from "vant";
import { Button } from "vant";

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
    goDetail() {
      // this.$router.push({ path: "/newsDetail" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<!-- 框架样式覆盖 -->
<style lang="scss">
.msg[data-v-3348b2b0] {
  background: #e6e6e6 !important;
}
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
  .configuration {
    width: 351px;
    height: 100px;
    background: #ffffff;
    border-radius: 5px;
    margin: 16px auto auto auto;
  }
  .configuration_two {
    margin-top: 7px;
  }
  .configuration_title {
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #1978ff;
    padding: 11px 13px 0px 13px;
  }
  .num {
    width: 323px;
    height: 45px;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 18px;
    word-wrap: break-word;
    padding: 0 15px;
    margin-top: 10px;
  }
  .comment {
    display: flex;
    align-items: center;
    margin-top: 37px;
    margin-left: 25px;
  }
  .comment span {
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 18px;
    margin-right: 3px;
  }
  .comment img {
    width: 7px;
    height: 6px;
  }
  textarea {
    width: 351px;
    height: 100px;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 18px;
    border: none;
    text-indent: 13px;
    padding: 10px 0;
  }
  .configuration_three {
    margin-top: 7px;
  }
}
</style>
<!--页面私有样式 -->
<style scoped lang="scss">
.msg {
  height: 100vh;
  background: #fff;
  .van-button {
    width: 351px;
    height: 40px !important;
    background: linear-gradient(0deg, #1876ff, #2996ff);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 83px auto auto auto;
  }
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
