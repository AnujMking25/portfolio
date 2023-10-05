import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const email = "anuj170499@gmail.com";
  const phoneNumber = "+91 6307221372";

  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-mishra-k25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon icon={faSquarePhone} />
        </a>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className={styles.copyright}>Copyright © 2023 Anuj Mishra</div>
    </footer>
  );
};

export default Footer;
