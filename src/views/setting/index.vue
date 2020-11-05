<template>
  <div class=" msg">
    <div v-if="list.length > 0">
      首页
    </div>
    <!-- <div v-else>
        <van-empty description="暂时没有任何内容哦" />
      </div> -->

    <div class="header-bage">
      <img src="../../assets/img/icon_daohang.png" alt="" />
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
Vue.use(Overlay);
Vue.use(Empty);
export default {
  name: "home",
  data() {
    return {
      list: [],
      show: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goIndustry() {
      this.$router.replace("/about");
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
    width: 375px;
    height: 194px;
    background: url(../../assets/img/icon_beijing.png);
    background-position: center;
    background-size: 100%;
  }

  .header-bage img {
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
}
</style>

<style scoped lang="scss"></style>
