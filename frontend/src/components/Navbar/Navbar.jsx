import React from "react";
import "./Navbar.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        cs-archive
      </a>
      <input type="checkbox" id="check" />
      <label for="check" className="icons">
        <MenuIcon fontSize="large" id="menu-icon" />
        <MenuOpenIcon fontSize="large" id="close-icon" />
      </label>
      <nav className="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={10}
          style={{ cursor: "pointer" }}
        >
          Strona główna
        </Link>
        <Link
          to="inspect-player"
          spy={true}
          smooth={true}
          duration={10}
          style={{ cursor: "pointer" }}
        >
          Sprawdź gracza
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={10}
          style={{ cursor: "pointer" }}
        >
          Kontakt
        </Link>
        <a href="#">
          <DarkModeOutlinedIcon fontSize="large" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
