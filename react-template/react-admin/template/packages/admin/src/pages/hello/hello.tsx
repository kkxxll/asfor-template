import "react";
import styles from "./index.module.scss";
import { useTranslation, Trans } from 'react-i18next';


export default (props) => {

  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <div className={styles.title}>{t('hello.title')}</div>
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
