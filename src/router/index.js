import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@v/layout";
import Cookie from "@u/cookie";
import { Toast } from "vant";
Vue.use(Toast);
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@v/login")
  },
  {
    path: "/",
    name: "Vermicelli",
    component: Layout,
    redirect: "/vermicelli",
    children: [
      {
        path: "/mine",
        name: "Mine",
        component: () => import("@v/mine")
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@v/home")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@v/about")
      }
    ]
  },
  {
    path: "/newsDetail",
    name: "NewsDetail",
    component: () => import("@v/newsDetail")
  },
  {
    path: "/vermicelli",
    name: "Vermicelli",
    component: () => import("@v/vermicelli")
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("@v/setting")
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("@v/info")
  },
  {
    path: "/activate",
    name: "Activate",
    component: () => import("@v/activate")
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: () => import("@v/instructions")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@v/user")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 路由变化时
router.beforeEach((to, from, next) => {
  next();
  // let token = Cookie.get("token");
  // console.log(to, from);
  // if (!token && to.path != "/login") {
  //   if (from.path != "/") {
  //     Toast("登录过期");
  //   }
  //   next({
  //     path: "/login"
  //   });
  // } else {
  //   next();
  // }
});
export default router;
