import { React, useRef, useState, useEffect } from "react";
import "./ProjectCardStyle.css";

const ProjectCard = (props) => {
  const { cardDirection, title, technology, liveLink, gitLink, img } = props;
  const cardRef = useRef(null);
  console.log(cardDirection);
  const [isCardVisible, setisCardVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log(entry);
        setisCardVisible(entry.isIntersecting);
        console.log("isCardVisible", isCardVisible);
        if (entry.isIntersecting) {
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={
        isCardVisible
          ? cardDirection === "left"
            ? "project-card"
            : "project-card right"
          : "hide-card"
      }
    >
      <div
        className={
          cardDirection === "left"
            ? "project-image-container"
            : "project-image-container project-image-container-right"
        }
      >
        <img
          className={
            cardDirection === "left" ? "project-image" : "project-image-right"
          }
          src={`static/${img}`}
        ></img>
      </div>

      <div
        className={
          cardDirection === "left"
            ? "project-info"
            : "project-info project-info-left"
        }
      >
        <h3 className="project-header"> Featured Project </h3>
        <span className="project-name"> {title} </span>
        <p className="project-description">
          {" "}
          Project Description:Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </p>
        <div className="project-technologies">{technology}</div>

        <div>
          {" "}
          <a href={gitLink}> Github </a> | <a href={liveLink}> Live </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
