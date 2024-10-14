import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { globalStore } from "@/stores/index";
import { createRouteData, routeData } from "@/router/index";
import { observer } from "mobx-react";
import { getPermissions } from "./service";
import Login from "./pages/LoginPage";
import LayoutPage from "./pages/LayoutPage";
import "./App.css";

const App = observer(() => {
  const { setRouterData, setPermissions } = globalStore;
  const [routerData, setRouter] = useState<any>();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    // debugger
    initRouterData()
  }, [token, globalStore.token]);


  const initRouterData = async () => {
    if (globalStore.token || token) {
      sessionStorage.setItem("ACCESS_TOKEN", globalStore.token || token);

      const res = await getPermissions()
      const { data } = res;
      const temp = createRouteData(data);
      sessionStorage.setItem("PER", data);
      setRouter(temp);
      setRouterData(temp);
      setPermissions(data);
      navigate("/center/hello");

    } else {
      navigate("/");
      setRouter(routeData);
      setRouterData(routeData);
    }
  }


  const toRenderRoute = (item) => {
    const { children } = item;
    let arr = [];
    if (children) {
      arr = children.map((item) => {
        return toRenderRoute(item);
      });
    }
    return (
      <Route
        children={arr}
        key={item.path}
        path={item.path}
        element={item.element}
      ></Route>
    );
  };

  return (
    <>
      {routerData && (
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/center"
            element={<LayoutPage></LayoutPage>}
            children={routerData?.[1]?.children?.map((item) => {
              return toRenderRoute(item);
            })}
          ></Route>
        </Routes>
      )}
    </>
  );
});
export default App