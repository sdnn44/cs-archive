import React from "react";
import "./Navbar.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="#" className="logo">
          cs
        </a>
        <img src={require("../../images/logo.png")} alt="logo" />
        <a href="#" className="logo">
          archive
        </a>
      </div>
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
