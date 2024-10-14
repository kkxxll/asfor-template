import "react";
import styles from "./index.module.scss";
import LoginCard from "./loginCard";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className={styles.content}>
      <div className={styles.moderate}>
        animate Text
      </div>
      <div className={styles.loginPanel}>
        <LoginCard>
          <LoginForm />
        </LoginCard>
      </div>
    </div>
  );
};

export default Login
