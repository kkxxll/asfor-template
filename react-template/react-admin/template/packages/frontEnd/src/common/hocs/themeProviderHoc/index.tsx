import "react";
import { ConfigProvider } from "antd";

const themeProviderHoc = (Comp, theme) => {
  return (props) => {
    return (
      <ConfigProvider theme={theme}>
        <Comp {...props} />
      </ConfigProvider>
    );
  };
};
export default themeProviderHoc