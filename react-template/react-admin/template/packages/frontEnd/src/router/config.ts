import { Hello, UserPage } from "../pages";
export default {
  center: {
    meta: {
      title: "中心",
    },
  },
  hello: {
    meta: {
      title: "首页",
    },
    component: Hello,
  },
  sys: {
    meta: {
      title: "系统管理",
    },
  },
  user: {
    meta: {
      title: "用户管理",
    },
    component: UserPage,
    state: { a: 1111 },
  },
};
