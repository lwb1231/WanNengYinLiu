<template>
  <div class=" msg">
    <div v-if="list.length > 0">
      首页
    </div>

    <div class="header-bage">
      <van-popup
        v-model="show1"
        position="left"
        :style="{ height: '100%', width: '220px' }"
      >
        <div class="more">更多</div>
        <div class="more_bottom">
          <div class="more_item" @click="goUser">
            <img src="../../assets/img/icon_yonghushezhi.png" alt="" />
            <span class="title">用户设置</span>
          </div>
          <div class="more_item" @click="goActivate">
            <img src="../../assets/img/icon_jihuoshouquan.png" alt="" />
            <span class="title">激活授权</span>
          </div>
          <div class="more_item" @click="goInstructions">
            <img src="../../assets/img/icon_shiyongshuoming.png" alt="" />
            <span class="title">使用说明</span>
          </div>
          <div class="more_item" @click="goAbout">
            <img src="../../assets/img/icon_guanyuwomen.png" alt="" />
            <span class="title">关于我们</span>
          </div>
        </div>
      </van-popup>
      <img @click="left_show" src="../../assets/img/icon_daohang.png" alt="" />
      <div class="equities">自动引流涨粉拓客多种权益</div>

      <div class="safety">
        <span class="transverse"></span> 智能精准 高效安全
        <span class="transverse"></span>
      </div>
    </div>
    <div class="option">
      <img
        class="option_leftImg"
        src="../../assets/img/icon_zhuanhuan.png"
        alt=""
      />
      <div class="transmit" @click="goIndustry">
        <span class="transmit-top">行业转换</span>
        <span class="transmit-bottom">用于视频号里面的用户列表界面</span>
      </div>
      <img
        class="option_rightImg"
        src="../../assets/img/icon_kaiguan.png"
        alt=""
      />
    </div>
    <div class="option">
      <img
        class="option_leftImg"
        src="../../assets/img/icon _qushuiyin.png"
        alt=""
      />
      <div class="transmit">
        <span class="transmit-top">视频号去水印</span>
        <span class="transmit-bottom">用于给所有的视频号去掉水印</span>
      </div>
      <img
        class="option_rightImg"
        src="../../assets/img/icon_kaiguan.png"
        alt=""
      />
    </div>
    <div class="option">
      <img
        class="option_leftImg"
        src="../../assets/img/icon_xuanshang.png"
        alt=""
      />
      <div class="transmit">
        <span class="transmit-top">悬赏任务</span>
        <span class="transmit-bottom">敬请期待</span>
      </div>
      <img
        class="option_rightImg"
        src="../../assets/img/icon_kaiguan.png"
        alt=""
      />
    </div>
    <div class="option">
      <img
        class="option_leftImg"
        src="../../assets/img/icon_yinliu.png"
        alt=""
      />
      <div class="transmit">
        <span class="transmit-top">万能引流</span>
        <span class="transmit-bottom">用于视频号所有的播放界面</span>
      </div>
      <img
        class="option_rightImg"
        src="../../assets/img/icon_kaiguan.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty } from "vant";
import { Overlay } from "vant";
import { Dialog } from "vant";
// 全局注册
import { Popup } from "vant";

Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Overlay);
Vue.use(Empty);
export default {
  name: "home",
  data() {
    return {
      list: [],
      show: false,
      show1: false
    };
  },
  mounted() {
    this.getData();
    Dialog.confirm({
      confirmButtonText: "立即开始",
      message: "微引流将截取您的电脑屏幕上显示的所有内容。",
      confirmButtonColor: "#216EF0"
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  methods: {
    goUser() {
      this.$router.replace("/user");
    },
    goInstructions() {
      this.$router.replace("/instructions");
    },
    goActivate() {
      this.$router.replace("/activate");
    },
    goAbout() {
      this.$router.replace("/about");
    },
    goIndustry() {},
    left_show() {
      this.show1 = true;
    },
    getData() {},
    goDetail() {},
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style lang="scss">
.msg {
  .header-bage {
    height: 194px;
    background: url(../../assets/img/icon_beijing.png);
    background-position: center;
    background-size: 100%;
  }

  .header-bage > img {
    width: 18px;
    height: 15px;
    position: fixed;
    left: 12px;
    top: 33px;
  }
  .equities {
    text-align: center;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 12px;
    padding-top: 69px;
  }
  .safety {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 12px;
    text-align: center;
    margin-top: 24.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .transverse {
    display: inline-block;
    width: 12px;
    height: 1px;
    background: #ffffff;
    margin: 0 4.5px;
  }
  .option {
    display: flex;
    align-items: center;
    padding: 0 21px;
    margin-top: 32px;
  }
  .option_leftImg {
    width: 24px;
    height: 24px;
    margin-right: 21px;
  }
  .option_rightImg {
    width: 13px;
    height: 13px;
    position: absolute;
    right: 23px;
  }

  .transmit {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .transmit-top {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #0f0f0f;
    line-height: 12px;
    margin-bottom: 8.5px;
  }
  .transmit-bottom {
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #999999;
    line-height: 12px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  .more {
    margin: 48px 0 0 29px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 12px;
    margin-bottom: 30px;
  }
  .more_item {
    display: flex;
    align-items: center;
    margin: 4px 0 0 29px;
    width: 220px;
    height: 40px;
  }
  .more_item > img {
    width: 15px;
    height: 13px;
    margin-right: 11px;
  }
  .title {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 12px;
  }
  .more_bottom {
    width: 220px;
    height: 667px;
    background: #ffffff;
  }
}
</style>

<style scoped lang="scss"></style>
