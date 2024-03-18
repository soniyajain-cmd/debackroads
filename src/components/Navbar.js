import React from "react";
import Logo from "../images/logo.svg";
import { SocialLinks } from "../data";
import PageLink from "./PageLink";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <PageLink parentclass="nav-links" childclass="nav-link"></PageLink>

          <ul className="nav-icons">
            {SocialLinks.map((sociallink) => {
              return (
                <li key={sociallink.id}>
                  <a
                    href={sociallink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={sociallink.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
