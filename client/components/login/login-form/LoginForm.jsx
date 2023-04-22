import { Button, Divider, Form } from "antd";
import React from "react";
import EmailField from "../../common/email-field/EmailField";
import PasswordField from "../../common/password-field/PasswordField";
import styles from "./styles.module.scss";

const LoginForm = () => {
  return (
    <Form layout="vertical" className={styles["ant-form"]}>
      <EmailField />
      <PasswordField />
      <Button htmlType="submit" className={styles["submit-btn"]} block>
        Login
      </Button>
      <p
        className={styles.agree}
        style={{ textAlign: "start", marginTop: "1rem" }}
      >
        By creating an account, you agree to Amazon's <a href="#">Conditions</a>{" "}
        of Use and <a href="#">Privacy Notice.</a>
      </p>
    </Form>
  );
};

export default LoginForm;
