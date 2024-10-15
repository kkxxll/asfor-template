import { http } from "@/common/http";

interface loginParamsT {
  name: string;
  password: string;
}

export function login(params: loginParamsT) {
  return http.request<{ isAdmin: boolean; token: string }>({
    url: "/login",
    method: "POST",
    data: params,
  });
}
