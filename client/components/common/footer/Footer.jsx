import React from "react";
import styles from "./styles.module.scss";
import Container from "../container/Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className={styles.footer}>Footer</footer>
      </Container>
    </div>
  );
};

export default Footer;
