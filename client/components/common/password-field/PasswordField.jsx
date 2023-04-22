import React from "react";
import { Form, Input } from "antd";

const PasswordField = () => {
  return (
    <Form.Item
      name="password"
      label="Password"
      rules={[
        { required: true, message: "Enter your password" },
        {
          validator(_, value) {
            if (!value || value.length >= 6) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error("minimum 6 characters required"));
            }
          },
        },
      ]}
      hasFeedback
    >
      <Input.Password placeholder="At least 6 characters" />
    </Form.Item>
  );
};

export default PasswordField;
