import React from "react";
import { Container } from "../components";
import styles from "../styles/home.module.scss";

const HomePage = () => {
  return (
    <>
      <Container>
        <header className={styles.header}>Header</header>
      </Container>
    </>
  );
};

export default HomePage;
