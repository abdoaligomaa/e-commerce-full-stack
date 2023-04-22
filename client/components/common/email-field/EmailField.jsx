import React from "react";
import { Form, Input } from "antd";

const EmailField = () => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: "Enter your email" },
        { type: "email", message: "Invalid email" },
      ]}
      hasFeedback
    >
      <Input />
    </Form.Item>
  );
};

export default EmailField;
