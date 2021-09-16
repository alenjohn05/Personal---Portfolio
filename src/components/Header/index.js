import { ImBehance2, ImGithub, ImLinkedin } from "react-icons/im";
import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">AJ</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/alen-john-aj/">
            <ImLinkedin className="social-network-img" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alenjohn05">
            <ImGithub className="social-network-img" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/alenjohn05">
            <ImBehance2 className="social-network-img" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
