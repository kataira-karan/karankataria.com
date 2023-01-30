import { React, useEffect, useState } from "react";
import "./SocialStyle.css";
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrMail,
} from "react-icons/gr";

const Socials = () => {
  const [isSocialsVisable, setisSocialsVisable] = useState(false);

  useEffect(() => {
    setisSocialsVisable(true);
  }, []);

  return (
    <>
      <ul
        className={
          isSocialsVisable
            ? "socials-container socials-container-active"
            : "socials-container"
        }
      >
        <li className="social-link">
          {" "}
          <a className="link">
            {" "}
            <GrMail
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "mailto:karankatariac22@gmail.com?subject=Subject&body=Body%20goes%20here"
                );
              }}
            ></GrMail>
          </a>
        </li>

        <li className="social-link">
          {" "}
          <a className="link" href="https://www.instagram.com/accounts/login/">
            {" "}
            <GrInstagram></GrInstagram>
          </a>
        </li>
        <li className="social-link">
          {" "}
          <a
            className="link"
            href="https://github.com/kataira-karan"
            target="_blank"
          >
            <GrGithub></GrGithub>
          </a>
        </li>
        <li className="social-link">
          {" "}
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/karan-kataria-184a77134/"
          >
            <GrLinkedinOption></GrLinkedinOption>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
