import React from "react";

import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h1 className={styles.aboutMeHeading}>About Me</h1>
      <div className={styles.aboutMeIntro}>
        <p>
          I love creating awesome user interfaces that are engaging and
          aesthetically pleasing. I am enthusiastic about transforming{" "}
          <span className={styles.ideas}>ideas</span> into{" "}
          <span className={styles.digitalProduct}>digital products</span>. I
          have done Bachelor's of Computer Application. 
          I have over 1.1 year of experience in Web Development.
          I believe in writing{" "}
          <span className={styles.clean}>clean and efficient code. </span>
          I am Interested in Coding and learning new Skill.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
