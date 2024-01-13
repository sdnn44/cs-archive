import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";

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
      <section className="home" id="home">
        <div className="home-content">
          <Fade triggerOnce direction="down" duration={500}>
            <h3>Once a cheater, always a</h3>
            <h1>cheater</h1>
            <br />
            <p className="home-text">
              Nikt nie lubi oszustów, prawda?
              Aplikacja została stworzona z jednoznacznym celem: wspierania
              <span> uczciwej</span> i <span> sprawiedliwej</span> rozgrywki dla szerokiej społeczności
              graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem
              banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może
              sprawdzić, czy na konto została nałożona aktywna blokada permanentna.
            </p>
            <Link
              to="inspect-player"
              spy={true}
              smooth={true}
              duration={10}
              className="btn"
              id="home-button"
            >
              Sprawdź gracza
            </Link>
          </Fade>
        </div>
        <div className="container">
          <div className="background-image">
            <img
              className={`parallax ${scrollPosition > 0 ? "active" : ""}`}
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
