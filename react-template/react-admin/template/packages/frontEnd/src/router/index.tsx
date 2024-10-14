import { Suspense } from "react";
import { Hello, LoginPage } from "../pages";
import routerConfig from "./config";
export const RouteIds = {
  hello: "hello",
  sys: "sys",
  user: "user",
};


export const routesStructData = [
  {
    id: RouteIds.hello,
  },
  {
    id: RouteIds.sys,
    children: [{ id: RouteIds.user }],
  },
];

let permissions: any = [];


const processRoute = (children: any[], routesData: any[], prefix: string) => {

  const curRouterConfig: any = routerConfig 

  routesData.forEach((routeItem) => {
    const { id } = routeItem;
    if (permissions.includes(id)) {
      const curRouteData: any = curRouterConfig[id];
      // 沿途记录，然后拼接成path
      curRouteData.path = prefix + "/" + id;
      curRouteData.routeId = id;
      const { component: Component } = curRouteData;
      if (Component) {
        curRouteData.element = (
          <Suspense>
            <Component></Component>
          </Suspense>
        );
      }
      children!.push(curRouteData);
      if (routeItem.children?.length > 0) {
        curRouteData.children = [];
        processRoute(curRouteData.children, routeItem.children!, curRouteData.path);
      }
    }
  });
};

export const createRouteData = (per: any) => {
  const result: any = [];
  permissions = per;
  processRoute(result, routesStructData, "/center");
  centerRouteDta.children = [];
  centerRouteDta.children = result;

  return routeData;
};

// 中心路由
export const centerRouteDta = {
  id: RouteIds.hello,
  name: "中心",
  path: "/center",
  element: (
    <Suspense>
      <Hello></Hello>
    </Suspense>
  ),
  children: [],
};

export const routeData = [
  {
    name: "登陆页",
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  centerRouteDta,
];




export default routeData;
