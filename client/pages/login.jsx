import React from "react";
import styles from "../styles/login.module.scss";
import { Container, SignFooter } from "../components";
import Link from "next/link";
import LoginForm from "../components/login/login-form/LoginForm";
import images from "../assets/images";
import { Button, Divider } from "antd";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <section className={styles["login-section"]}>
        <Container className={styles.container}>
          <Link href="/">
            <img src={images.logo} alt="Logo" className={styles.logo} />
          </Link>
          <LoginForm />
          <Divider>new to amazon?</Divider>
          <Button
            htmlType="button"
            onClick={() => {
              router.push("/register");
            }}
          >
            Create your amazon acount
          </Button>
        </Container>
      </section>
      <SignFooter className={styles.footer} />
    </div>
  );
};

export default Login;

// Remove the common navbar and footer
Login.getLayout = (page) => <>{page}</>;
