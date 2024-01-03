import React, { useRef, useState } from "react";
import "./Contact.css";
import LaunchIcon from "@mui/icons-material/Launch";
import Ornament from "../../components/Ornament/Ornament";
import Footer from "../../components/Footer/Footer";

import emailjs from "@emailjs/browser";

import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setOpen(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setOpen(true);
        }
      );
  };

  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        sx={{ zIndex: "tooltip" }}
        {...props}
      />
    );
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <input required type="text" placeholder="Nick" name="user_name" />
          <input required type="email" placeholder="Email" name="user_email" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Temat" />
        </div>
        {/* <div className="input-box">
                <input type="email" placeholder="Wiadomość" />
            </div> */}
        <textarea
          required
          name="message"
          id=""
          cols="10"
          rows="1"
          placeholder="Wiadomość"
        />
        <div className="input-box">
          <input type="submit" className="btn" value="Send" />
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%", fontSize: 13, zIndex: "tooltip" }}
        >
          {isSuccess
            ? "Wiadomość została wysłana."
            : "Błąd podczas wysyłania wiadomości."}
        </Alert>
      </Snackbar>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
