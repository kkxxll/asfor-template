import type { ITP } from "natur-immer"

// 状态
const initState = () => ({
  number: 0,
  permissions: [],
  routesData: [],
  token: sessionStorage.getItem("ACCESS_TOKEN") || "",
  isAdmin: sessionStorage.getItem("IS_ADMIN") === "1",
  tabsHistory: {},
});

const state = initState();
type State = typeof state;

// 计算属性
const maps = {};

// 操作
const actions = {
  inc: (number) => ({ number: number + 1 }),
  dec: (number) => ({ number: number - 1 }),
  setPermissions: (value) => ({ permissions: value }),
  setRoutesData: (value) => {
    return { routesData: value };
  },
  setToken: (value: string) => ({ token: value }),
  setIsAdmin: (value: boolean) => ({ isAdmin: value }),
  init: () => initState(),

  deleteTabHistory:
    (pathName: string) =>
      ({ setState }: ITP<State>) =>
        setState((state) => {
          const temp = state.tabsHistory;
          if (Object.values(temp).length > 1) {
            Reflect.deleteProperty(temp, pathName);
          }
        }),
  addTabHistory:
    (newItem: any) =>
      ({ setState }: ITP<State>) => {
        return setState((state) => {
          state.tabsHistory[newItem.pathname] = newItem;
        });
      },
};

export default {
  state,
  maps,
  actions,
};
