<template>
  <div class="msg">
    <van-nav-bar
      title="行业粉丝转化"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="select" @click="choose">
      <div class="title">运行次数</div>
      <div class="select-pro">
        <span>请选择</span>
        <img src="../../assets/img/icon_xuanze.png" alt="" />
      </div>
    </div>
    <div class="select" @click="remain">
      <div class="title">主页停留</div>
      <div class="select-pro">
        <span>请选择</span>
        <img src="../../assets/img/icon_xuanze.png" alt="" />
      </div>
    </div>
    <div class="select">
      <div class="title">关注</div>
      <div class="select-pro">
        <van-switch v-model="checked" />
      </div>
    </div>
    <div class="select">
      <div class="title">私信</div>
      <div class="select-pro">
        <van-switch v-model="checked1" />
      </div>
    </div>
    <van-button type="primary" size="large" @click="goDetail"
      >保存并返回</van-button
    >
    <van-action-sheet v-model="show" style="height: 50%;">
      <van-picker show-toolbar title="请选择运行次数" :columns="columns"  @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange" :default-index="2" />
    </van-action-sheet>
    <van-action-sheet v-model="isShow" style="height: 50%;">
      <van-picker show-toolbar title="主页停留时长（单位：秒）"    @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange" :columns="columns_two" />
    </van-action-sheet>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider,Toast,Switch,Button,Picker,ActionSheet} from "vant";

Vue.use(Picker);
Vue.use(ActionSheet);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Empty);
Vue.use(Divider);
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  name: "about",
  data() {
    return {
      checked: true,
      isShow: false,
      checked1: true,
      show: false,
      columns: ["500", "1000", "1500", "2000"],
      columns_two: [
        // 第一列
        {
          values: ['0', '500', '1000', ],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ['500', '1000', '1500'],
          defaultIndex: 1,
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    onConfirm(value) {
      Toast(`当前值：${value}`);
    },
    onChange(picker) {
      Toast(`当前值：${value}`);
    },
    onCancel() {
      Toast('取消');
    },
    remain() {
      this.isShow = true;
      console.log(11)
    },
    getData() {},
    goDetail() {
      this.$router.push({ path: "/setting" });
    },

    choose() {
      this.show = true;
    },
    onClickLeft() {
      Toast("返回");
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
  .select {
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }
  .title {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
  }
  .select-pro {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .select-pro span {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #999999;
  }
  .select-pro img {
    width: 6px;
    height: 11px;
    margin-left: 5.5px;
  }
  .van-button {
    width: 351px;
    height: 40px;
    background: linear-gradient(0deg, #1876ff, #2996ff);
    border-radius: 20px;
    margin: 300px auto auto 12px;
  }
  .van-action-sheet__content {
    overflow-y: none;
  }
  .van-picker__toolbar {
    position: relative;
  }
  .content {
    height: 100px;
    position: absolute;
  }
  .van-picker-column {
    overflow-y: auto;
  }
.van-picker__title{
font-size: 13px;
font-family: PingFang SC;
font-weight: bold;
color: #333333;
}
.van-picker__confirm{
font-size: 12px;
font-family: PingFang SC;
font-weight: 500;
color: #1876FF;

}
.van-picker__cancel{
font-size: 12px;
font-family: PingFang SC;
font-weight: 500;
color: #999999;
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
