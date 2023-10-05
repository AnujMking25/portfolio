import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsList = [
    { name: "React", icon: "/SkillIconImages/ReactIcon.png" },
    { name: "Redux", icon: "/SkillIconImages/ReduxIcon.png" },
    { name: "Router", icon: "/SkillIconImages/ReactRouter.png" },
    { name: "JavaScript", icon: "/SkillIconImages/JavaScriptIcon.png" },
    { name: "NodeJs", icon: "/SkillIconImages/nodejs.webp" },
    { name: "Mongodb", icon: "/SkillIconImages/mongodb.png" },
    { name: "Express Js", icon: "/SkillIconImages/expressjs.png" },
    { name: "Mongoose", icon: "/SkillIconImages/Mongoose.png" },
    { name: "PS", icon: "/SkillIconImages/problemSolving.png"},
    
    { name: "HTML", icon: "/SkillIconImages/HTMLIcon.png"},
    { name: "CSS", icon: "/SkillIconImages/CSSIcon.png" },
    { name: "Git", icon: "/SkillIconImages/GitIcon.png" },
    { name: "GitHub", icon: "/SkillIconImages/GitHubIcon.png" },
    { name: "Firebase", icon: "/SkillIconImages/FirebaseIcon.png" },
    
    
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsHeading}>
        <span>Skills</span>
      </div>
      <div className={styles.skillsContainer}>
        {skillsList.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img
              src={skill.icon}
              alt={skill.name}
              className={styles.skillIcon}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
