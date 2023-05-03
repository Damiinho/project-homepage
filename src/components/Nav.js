import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link smooth to="#home">
            dom
          </Link>
        </li>
        <li>
          <Link smooth to="#logo">
            logo
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
