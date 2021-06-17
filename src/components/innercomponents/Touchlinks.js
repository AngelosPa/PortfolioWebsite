import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
const message = (
  <FontAwesomeIcon className="mail-icon" icon={faEnvelopeOpenText} />
);

function Touchlinks() {
  return (
    <div className="links-container">
      <a href="https://github.com/AngelosPa">
        <img
          src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
          alt="githubico"
        />
        My Github
      </a>

      <a href="https://www.linkedin.com/in/angelos-p-707216214/">
        <img
          src="https://icongr.am/fontawesome/linkedin.svg?size=128&color=2e5ac2

              "
          alt="linkedinico"
        />
        My Linkedin
      </a>
      <a href="https://www.xing.com/profile/Angelos_Papagiannopoulos2/cv">
        <img
          src="https://icongr.am/fontawesome/xing.svg?size=128&color=62ac39



              "
          alt="xingico"
        />
        Xing Profile
      </a>

      <a href="mailto: mrpalaiologos@gmail.com">
        <i>{message}</i> My Email
      </a>
    </div>
  );
}

export default Touchlinks;
