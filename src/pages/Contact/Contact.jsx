import React from "react";
import "./Contact.css";
import LaunchIcon from "@mui/icons-material/Launch";
import Ornament from "../../components/Ornament/Ornament";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  console.log("contact");
  return (
    <div className="contact" id="contact">
      <div className="ornament-section">
        <Ornament />
      </div>
      <h1>Kontakt</h1>
      <h2 className="heading">
        Masz propozycję dotyczącą strony? <span>Napisz!</span>
      </h2>
      <div className="steam-profile-link">
        <div className="pulse">
          <LaunchIcon sx={{ fontSize: "3rem" }} />{" "}
        </div>
        <a
          href="https://steamcommunity.com/profiles/76561197966805527"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          https://steamcommunity.com/profiles/76561197966805527{" "}
        </a>
      </div>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Nick" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Temat" />
        </div>
        {/* <div className="input-box">
                <input type="email" placeholder="Wiadomość" />
            </div> */}
        <textarea name="" id="" cols="10" rows="1" placeholder="Wiadomość" />
        <div className="input-box">
          <input type="submit" value="Wyślij" className="btn" />
        </div>
      </form>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
