import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      name: "E-Commerce",
      image: "/ProjectImages/EcommerceWebsite.jpg",
      demoLink: "https://e-commerce-f46a3.web.app/",
      githubLink: "https://github.com/AnujMking25/ecommerce.git",
    },
    {
      name: "Amazon Clone",
      image: "/ProjectImages/Amazon_clone.jpg",
      demoLink: "https://anuj-amazon-clone.netlify.app/",
      githubLink: "https://github.com/AnujMking25/amazonclone.git",
    },
    {
      name: "Expense Tracker",
      image: "/ProjectImages/ExpenseTracker.jpg",
      demoLink: "https://expenses-tracker-e19f3.web.app/",
      githubLink: "https://github.com/AnujMking25/expensetracker.git",
    },
    {
      name: "Mailbox Client",
      image: "/ProjectImages/MailboxClient.jpg",
      demoLink: "https://mail-box-f564c.web.app/",
      githubLink: "https://github.com/AnujMking25/mailboxclient.git",
    },
    {
      name: "My Portfolio",
      image: "/ProjectImages/portfolio.jpg",
      demoLink: "/",
      githubLink: "/",
    }
  ];

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.title}>The Projects</div>
      <div className={styles.projectDisplay}>
        {projectList.map((project, index) => (
          <ProjectTemplate key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
