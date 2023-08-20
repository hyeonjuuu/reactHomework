import { Link } from "react-router-dom";
import NavButton from "./NavButton";

function Nav() {
  return (
    <nav className=" mx-auto flex justify-center gap-2 pb-2">
      <Link to="/Home">
        <NavButton text="Home" />
      </Link>
      <Link to="/Contact">
        <NavButton text="Contact" />
      </Link>
    </nav>
  );
}

export default Nav;
