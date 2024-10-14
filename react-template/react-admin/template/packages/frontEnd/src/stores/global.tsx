import { makeAutoObservable, toJS } from "mobx";
import type { Location } from "react-router-dom";

class Global {
  routerData = [];
  token = "";
  tabsHistory: { [key: string]: Location } = {};
  permissions = [];

  constructor() {
    makeAutoObservable(this);
  }
  init() {
    this.routerData = [];
    this.token = "";
    this.tabsHistory = {};
    this.permissions = [];
  }
  setRouterData = (data = []) => {
    this.routerData = data;
  };

  setToken = (token: string) => {
    this.token = token;
  };

  addTabHistory = (newItem: Location) => {
    const temp = toJS(this.tabsHistory);
    temp[newItem.pathname] = newItem;
    this.tabsHistory = temp;
  };

  deleteTabHistory = (pathName: string) => {
    const temp = toJS(this.tabsHistory);
    if (Object.values(temp).length > 1) {
      Reflect.deleteProperty(temp, pathName);
      this.tabsHistory = temp;
    }
  };

  setPermissions = (permissions = []) => {
    this.permissions = permissions;
  };
}

export default new Global();
