import React from "react";
import { PageLinks } from "../data";
function PageLink(props) {
  return (
    <ul className={props.parentclass} id="nav-links">
      {PageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={props.childclass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLink;
