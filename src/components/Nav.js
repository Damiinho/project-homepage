import { HashLink as Link } from "react-router-hash-link";
import LogoDuckIMG from "../img/duck-emoji-clipart-original.svg";

const Nav = () => {
  const handleDuckClick = () => {
    const duck = document.querySelector(".nav-logo");
    duck.classList.add("move");
    setTimeout(() => {
      duck.classList.remove("move");
    }, 2000);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link smooth to="/#home">
            dom
          </Link>
        </li>
        <li>
          <Link smooth to="/#logo">
            logo
          </Link>
        </li>
        <li>
          <Link smooth to="/#contact">
            kontakt
          </Link>
        </li>
      </ul>
      <img
        className="nav-logo"
        src={LogoDuckIMG}
        alt="logo"
        onClick={handleDuckClick}
      />
    </nav>
  );
};

export default Nav;
