import { Card } from "antd";
import type { ReactNode } from "react";


const App = (props: { children: ReactNode }) => (
  <Card
    hoverable
    style={{ width: 400 }}
    cover={
      <div>img </div>
    }
  >
    {props.children}
  </Card>
);

export default App;
