import { React, useEffect, useState } from "react";
import "./NavigationStyle.css";

const Navigation = () => {
  const [isNavOn, setisNavOn] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(false);

  useEffect(() => {
    setisNavOn(true);
  }, [isNavOn]);

  return (
    <nav
      className={
        !isNavOn ? "navigation-bar" : "navigation-bar navigation-bar-active"
      }
    >
      <div className="">Karan Kataria</div>
      <ul className="nav-list">
        <li className="nav-list-item">About Me</li>
        <li className="nav-list-item">Contact</li>
        <li className="nav-list-item download-resume">
          <a href="karanKatariaResume.docx" download="karanKatariaResume.docx">
            <button className="nav-list-item resume-button">Resume</button>
            {/* <span className="download-option">Download</span> */}
          </a>
        </li>
      </ul>

      <div className="mobile-menu-container">
        <button
          className="mobile-menu-button"
          onClick={() => setopenMobileMenu(!openMobileMenu)}
        >
          Menu
        </button>

        <div
          className={
            openMobileMenu ? "mobile-menu open-mobile-menu" : "mobile-menu"
          }
        >
          <ul className="mobile-menu-list">
            <li className="nav-list-item">About Me</li>
            <li className="nav-list-item">Contact</li>
            <li className="nav-list-item download-resume">
              <a
                href="karanKatariaResume.docx"
                download="karanKatariaResume.docx"
              >
                <button className="nav-list-item resume-button">Resume</button>
                {/* <span className="download-option">Download</span> */}
              </a>
            </li>
          </ul>
          <div>
            <button>Close</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
