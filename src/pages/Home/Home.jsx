import React from "react";
import Header from "../../components/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <Header /> */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Once a cheater, always a</h3>
          <h1>cheater</h1>
          <br />
          <p className="header-text fs-18 fw-3">
            Aplikacja pozwala na sprawdzenie Steam_ID gracza pod kątem banów za
            oszukiwanie. Strona zawiera listę banów z najpopularniejszych
            polskich sieci serwerów. Użytkownik na podstawie Steam_ID gracza
            może sprawdzić, czy została nałożona blokada permanentna na to konto
            w przeszłości i trwa do dziś.
          </p>
          <Link to="/sprawdz" className="btn">
            Sprawdź gracza
          </Link>
        </div>
        <div className="container">
          <div className="overlay"></div>
        </div>
      </section>
      <Outlet />
    </main>
  );
};

export default Home;
