// import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SHeader from './style';
import Logo from './logo.png';
import iconMenuBurger from './burgerMenu.png';
import logoGitHub from './logoGitHub.png';
import logoLinkedIn from './logoLinkedIn.png';

export default function Header() {
  return (
    <SHeader>
      <div className="header">
        <Link id="header" to="/">
          <img className="logoHeader" src={Logo} alt="Logo" />
        </Link>
        <div className="right">
          <div className="iconSocials">
            <a
              href="https://www.linkedin.com/in/mariongrolleau/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logoLinkedIn" src={logoLinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Mariion-62">
              <img src={logoGitHub} alt="Github" className="logoGitHub" />
            </a>
          </div>
          <img
            className="iconMenuBurger"
            src={iconMenuBurger}
            alt="Menu Burger"
          />
        </div>
      </div>
    </SHeader>
  );
}
