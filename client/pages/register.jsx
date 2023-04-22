import React from "react";
import styles from "../styles/register.module.scss";
import { Container, RegisterForm, SignFooter } from "../components";
import images from "../assets/images";

const Register = () => {
  return (
    <>
      <section>
        <Container className={styles.container}>
          <img src={images.logo} alt="Logo" className={styles.logo} />
          <RegisterForm />
        </Container>
      </section>
      <SignFooter />
    </>
  );
};
export default Register;

// Remove the common navbar and footer
Register.getLayout = (page) => <>{page}</>;
