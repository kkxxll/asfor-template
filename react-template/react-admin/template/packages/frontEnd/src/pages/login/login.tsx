import styles from "./index.module.scss";
import LoginCard from "./loginCard";
import LoginForm from "./loginForm";

export default () => {
  return (
    <div className={styles.content}>
      <div className={styles.moderate}>
        img
      </div>
      <div className={styles.loginPanel}>
        <LoginCard>
          <LoginForm />
        </LoginCard>
      </div>
    </div>
  );
};
