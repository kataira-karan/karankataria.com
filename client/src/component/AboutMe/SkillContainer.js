import React from "react";
import "./SkillContainerStyle.css";

const SkillContainer = (props) => {
  return <div className="skill-container">{props.children}</div>;
};

export default SkillContainer;
