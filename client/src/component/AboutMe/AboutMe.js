import React, { useEffect, useState, useRef } from "react";
import SkillContainer from "./SkillContainer";
import "./AboutMeStyle.css";
import Title from "../Title/Title";

const AboutMe = () => {
  const [aboutMeIntroAnimation, setaboutMeIntroAnimation] = useState(false);
  const [skillAnimation, setskillAnimation] = useState(false);
  const aboutmeIntroRef = useRef(null);

  const [isAboutUsInfoVisible, setisAboutUsInfoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setisAboutUsInfoVisible(entry.isIntersecting);
        console.log("setisAboutUsInfoVisible", isAboutUsInfoVisible);
        if (entry.isIntersecting) observer.unobserve(aboutmeIntroRef.current);
      },
      { threshold: 0.5 }
    );
    // const aboutMeHeaderObserver = new IntersectionObserver((entries)=>{
    //   const entry = entries[0];

    // } )
    observer.observe(aboutmeIntroRef.current);
  }, []);

  useEffect(() => {
    setskillAnimation(true);
  }, [skillAnimation]);

  return (
    <section className="about-me-section" ref={aboutmeIntroRef}>
      <div
        className={
          isAboutUsInfoVisible
            ? "about-me-header about-me-header-active"
            : "about-me-header"
        }
      >
        <Title fontSize="2.5rem" textAlign="center" pt="1rem" pb="2rem">
          {" "}
          ABOUT ME
        </Title>
        <span className="about-me-header-description">
          Lorem Ipsum is <Title> Web Developer </Title> of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </span>
      </div>

      <div className="about-me-container">
        <div
          className={
            !isAboutUsInfoVisible
              ? "about-me-intro"
              : "about-me-intro about-me-intro-active"
          }
        >
          <Title fontSize="2rem" fontColor="black" pb="1rem">
            Who am I ?
          </Title>
          <span className="about-me">
            Lorem Ipsum is <Title> Web Developer </Title> of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s,<br></br> when an unknown printer
            took a galley of type and scrambled it to make a type
            specimeslectronic typesetting, remaining essentially unchanged.
            <br></br> It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </span>

          <button className="getintouch-button">Get In Touch</button>
        </div>

        <div
          className={
            !isAboutUsInfoVisible
              ? "about-my-skills"
              : "about-my-skills about-my-skills-active"
          }
        >
          <Title fontSize="2rem" fontColor="black" pb="1rem">
            My Skills
          </Title>
          <div className="skills">
            {" "}
            <SkillContainer>HTML</SkillContainer>
            <SkillContainer>CSS</SkillContainer>
            <SkillContainer>Java Script</SkillContainer>
            <SkillContainer>MongoDb</SkillContainer>
            <SkillContainer>NodeJs</SkillContainer>
            <SkillContainer>AngularJS</SkillContainer>
            <SkillContainer>ReactJS</SkillContainer>
            <SkillContainer>Basics Of SQL</SkillContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
