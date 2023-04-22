import React from "react";
import styles from "./styles.module.scss";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div>
      <Container>
        <header className={styles.header}>Navbar</header>
      </Container>
    </div>
  );
};

export default Navbar;
