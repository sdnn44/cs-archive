import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar />
      {/* <Header /> */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Once a cheater, always a</h3>
          <h1>cheater</h1>
          <br />
          <p className="home-text">
            Aplikacja pozwala na sprawdzenie Steam_ID gracza pod kątem banów za
            oszukiwanie. Strona zawiera listę banów z najpopularniejszych
            polskich sieci serwerów. Użytkownik na podstawie Steam_ID gracza
            może sprawdzić, czy została nałożona blokada permanentna na to konto
            w przeszłości i trwa do dziś.
          </p>
          <Link to="inspect-player" spy={true} smooth={true} duration={10} className="btn">
            Sprawdź gracza
          </Link>
        </div>
        <div className="container">
          <div className="background-image">
            <img
              className={`parallax ${scrollPosition > 0 ? 'active' : ''}`}
              src={require("./../../images/terrorist-background.png")}
              alt="background"
            />
            <div className="overlay"></div>
          </div>
        </div>
        {/* <div className="caution-banner">
          <img src={require("./../../images/caution.png")} alt="background" />
        </div> */}
      </section>
      <Outlet />
    </main>
  );
};

export default Home;
