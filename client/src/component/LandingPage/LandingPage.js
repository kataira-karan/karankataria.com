import { React, useEffect, useState } from "react";
import Socials from "../Socials/Socials";
import "./LandingPageStyle.css";

const LandingPage = () => {
  const [activateLandingPage, setactivateLandingPage] = useState(false);

  useEffect(() => {
    setactivateLandingPage(true);
  }, [activateLandingPage]);

  return (
    <div>
      <Socials></Socials>
      <div className="landing-page-container">
        <div
          className={
            activateLandingPage
              ? "landing-page-content landingpage-page-activate"
              : "landing-page-content "
          }
        >
          <div className="landing-page-intro">
            <span>Hello, 👋 I am </span>
            <span className="name"> KaranKataria </span>
            <span className="mobile-name">
              {" "}
              Karan <br></br> Kataria{" "}
            </span>
            <span> I Like to create and develope Web </span>
          </div>

          <img className="landing-page-image" src="karan.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
