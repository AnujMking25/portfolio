import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.lineContainer}>
        <div className={styles.text1}>
          Hi!<span className={styles.handIcon}>👋</span>I am Anuj Mishra.
        </div>
        <div className={styles.text2}> I am MERN Stack Developer.</div>
        <div className={styles.text3}>
          {" "}
          I create interactive and responsive user interfaces.{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
