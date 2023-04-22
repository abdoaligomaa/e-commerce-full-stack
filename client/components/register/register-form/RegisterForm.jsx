import React from "react";
import styles from "./styles.module.scss";
import { Button, Divider, Form, Input } from "antd";
import Link from "next/link";
import EmailField from "../../common/email-field/EmailField";
import PasswordField from "../../common/password-field/PasswordField";

const RegisterForm = () => {
  return (
    <Form className={styles["ant-form"]} layout="vertical">
      <h1 className={styles.title}>Create account</h1>
      <Form.Item
        name="name"
        label="Your name"
        rules={[{ required: true, message: "The name is required" }]}
        hasFeedback
      >
        <Input placeholder="First and last name" />
      </Form.Item>

      <EmailField />

      <PasswordField />

      <Form.Item
        name="confirmPassword"
        label="Re-enter password"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Re-enter the password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              } else {
                return Promise.reject(new Error("Passwords must match"));
              }
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className={styles["submit-btn"]} block>
          sign up
        </Button>
      </Form.Item>

      <p className={styles.agree}>
        By creating an account, you agree to Amazon's <a href="#">Conditions</a>{" "}
        of Use and <a href="#">Privacy Notice.</a>
      </p>
      <Divider />
      <p>
        Already have an account? <Link href="/login"> Sign in</Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
