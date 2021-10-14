import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="all-contacts">
        <div className="contact">
          <p>Etienne Fischer</p>
          <div className="contact-separator" />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/etienne-fischer-b859b7179/">
              <LinkedInIcon/>
            </a>
            <a href="https://github.com/efischer42"><GitHubIcon/></a>
          </div>
        </div>
        <div className="contact">
          <p>Tristan Fluteaux</p>
          <div className="contact-separator" />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/tristan-fluteaux/">
              <LinkedInIcon/>
            </a>
            <a href="https://github.com/tristanfluteaux"><GitHubIcon/></a>
          </div>
        </div>
      </div>
      <p className="copyrights">
        This app is not affiliated, endorsed or supported by Nintendo in any
        way, also some images used in this app are copyrighted and supported
        under fair use, Pokemon and Pokemon character names are trademark of
        Nintendo, no copyright infringement intended. Pokemon <span>©</span>{" "}
        2002-2020 Pokemon.
      </p>
    </div>
  );
};

export default Footer;
