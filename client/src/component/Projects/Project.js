import { React, useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Project.css";
import Title from "../Title/Title";

const Project = () => {
  const projectsTitleRef = useRef(null);

  const [isProjectTitleVisible, setisProjectTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setisProjectTitleVisible(entry.isIntersecting);
        console.log("isProjectTitleVisible", isProjectTitleVisible);
        if (entry.isIntersecting) {
          observer.unobserve(projectsTitleRef.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(projectsTitleRef.current);
  }, []);

  return (
    <div className="project-container">
      <div
        ref={projectsTitleRef}
        className={
          isProjectTitleVisible
            ? "projects-title projects-title-visible"
            : "projects-title"
        }
      >
        Somthings I have build
      </div>

      <ProjectCard
        title="The Notes App"
        technology="React | MongoDB | NodeJs"
        img="note.png"
        liveLink="https://notes-app-eight-opal.vercel.app/"
        gitLink="https://github.com/kataira-karan/notes-app"
        cardDirection="left"
      ></ProjectCard>
      <ProjectCard
        title="The Notes App"
        technology="React | MongoDB | NodeJs"
        img="note.png"
        liveLink="https://notes-app-eight-opal.vercel.app/"
        gitLink="https://github.com/kataira-karan/notes-app"
        cardDirection="right"
      ></ProjectCard>
      <ProjectCard
        title="The Notes App"
        technology="React | MongoDB | NodeJs"
        img="note.png"
        liveLink="https://notes-app-eight-opal.vercel.app/"
        gitLink="https://github.com/kataira-karan/notes-app"
        cardDirection="left"
      ></ProjectCard>
      <ProjectCard
        title="The Notes App"
        technology="React | MongoDB | NodeJs"
        img="note.png"
        liveLink="https://notes-app-eight-opal.vercel.app/"
        gitLink="https://github.com/kataira-karan/notes-app"
        cardDirection="right"
      ></ProjectCard>
    </div>
  );
};

export default Project;
