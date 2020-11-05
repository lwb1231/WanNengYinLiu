<template>
    <div class="msg">
        <van-nav-bar title="使用说明" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <div class="characteristic">
            <div class="versions">
                <span class="versions_top">1.产品特点和功能</span>
                <span class="versions_bottom">支持全系列安卓7.0以上手机</span>
            </div>
        </div>
        <div class="func">
            <span>2.常见问题</span>
            <div class="problem">
                <div class="problem_text">1.已在系统中打开无障碍，但软件无障碍开关依然没有打开：</div>
                <div class="problem_bottom">
                    解决方法：先尝试重启手机，如重启未解决，一般是手机中安装了什么软件与无障碍服务冲突了。
                </div>
            </div>
            <div class="problem">
                <div class="problem_text">2.无法进行坐标采集：</div>
                <div class="problem_bottom">
                    解决方法:首先查看微信版本是否是系统对应版本。再请查看手机是否有微信分身或者系统分身里面是否有微信(需要卸载)坐标采集必须在微信首页采集，确保采集时，微信显示界面在首页。
                </div>
            </div>
            <div class="problem">
                <div class="problem_text">3.软件支持的系统：</div>
                <div class="problem_bottom">
                    软件支持所有型号的安卓手机，部分云手机、虚拟机，不支持模拟器和苹果手机，少量vivo、oppo手机运行软件不稳定。
                </div>
            </div>  <div class="problem">
                <div class="problem_text">4.其他异常：</div>
                <div class="problem_bottom">
                    1.特殊输入法造成的异常，请尝试切换输入法；
                    2.误输入软件的兼容值，软件兼容值默认为10；
                    3.手机剩余内存过低或手机系统的设置对软件进行了限制（电池优化、内存优化等等）；
                </div>
            </div>  <div class="problem">
                <div class="problem_text">5.安装软件后图标上有感叹号：</div>
                <div class="problem_bottom">
                    通常是被安装的手机管家拦截，调试允许即可。
                </div>
            </div>  <div class="problem">
                <div class="problem_text">6.软件启动后，软件未操作：</div>
                <div class="problem_bottom">
                    请检查软件的应用权限是否完整，请到手机设置->应用管理->微引流->权限，将权限全部允许即可。
                </div>
            </div>  <div class="problem">
                <div class="problem_text">7.经常提醒微信版本不匹配：</div>
                <div class="problem_bottom">
                    这是因为微信开了自动升级，一般在应用商店中设置手动升级。
                </div>
            </div> 
        </div>
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
            getData() { },
            goDetail() {
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

        .characteristic {
            height: 77px;
            display: flex;
            align-items: center;
            padding: 0 12px;
            border-bottom: 1px solid #dedede;
        }

        .versions {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .versions_top {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #222222;
        }

        .versions_bottom {
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #666666;
        }

        .func {
            padding: 0 12px;
        }

        .func span {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #222222;
        }

        .problem {
            width: 350px;
            height: 80px;
            margin-top: 11px;
        }

        .problem_text {
            height: 12px;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #222222;
        }

        .problem_bottom {
            width: 350px;
            height: 25px;
            font-size: 10px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #222222;
            line-height: 15px;
            word-wrap: break-word;
            margin-top: 8px;
            text-indent: 20px;
            line-height: 20px;
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