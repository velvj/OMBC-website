import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import Copy from "../copyRight/copyRight";

function Footer() {
  return (
    <>
      <div id="section-header">
        <h2 className="section-title"> Follow Us</h2>
        <p id="para">
          Fresh baked bread is a special traet,a delicious treature of home
          cooked meal
        </p>
      </div>

      <div className="fontawesome" style={{ marginLeft: 750 }}>
        <FontAwesomeIcon
          icon={faFacebookF}
          color="#D2691E"
          style={{ padding: 8 }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          color="#D2691E"
          style={{ padding: 8 }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          color="#D2691E"
          style={{ padding: 8 }}
        />
        <FontAwesomeIcon
          icon={faPinterestP}
          color="#D2691E"
          style={{ padding: 8 }}
        />
      </div>
      <Copy></Copy>
    </>
  );
}
export default Footer;
