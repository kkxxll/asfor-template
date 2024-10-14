import { lazy } from "react";
const Hello = lazy(() => import("./HomePage/HelloPage"));
const UserPage = lazy(() => import("./HomePage/UserPage"));
const LoginPage = lazy(() => import("./LoginPage"));
export { Hello, UserPage, LoginPage };
