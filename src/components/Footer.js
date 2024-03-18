import React from "react";

import { SocialLinks } from "../data";
import PageLink from "./PageLink";

function Footer() {
  return (
    <>
      <footer className="section footer">
        <PageLink
          parentclass="footer-links"
          childclass="footer-link"
        ></PageLink>
        <ul className="footer-icons">
          {SocialLinks.map((sociallink) => {
            return (
              <li key={sociallink.id}>
                <a
                  href={sociallink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={sociallink.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
