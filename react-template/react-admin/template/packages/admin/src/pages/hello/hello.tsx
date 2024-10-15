import "react";
import styles from "./index.module.scss";
import { Image, Upload } from "antd";

export default (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>hello admin</div>
      <div className={styles.infoBoard}>
        <div
          style={{
            height: '100%',
            width: "100%",
            padding: "40px",
            backgroundColor: "var(--color-fill-2)",
            display: "flex",
            justifyContent: "start",
            color: "black",
            alignItems: "center",
          }}
        >
        </div>
      </div>
    </div>
  );
};
