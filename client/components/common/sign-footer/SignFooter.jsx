import React from "react";
import styles from "./styles.module.scss";

const SignFooter = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.links}>
        <a href="#">conditions of use</a>
        <a href="#">privacy notice</a>
        <a href="#">help</a>
      </div>
      <p className={styles.text}>
        &copy; 1996-2023, Amazon.com, Inc. or its affiliates
      </p>
    </footer>
  );
};

export default SignFooter;
