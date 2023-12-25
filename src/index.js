import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import { PlayerDetails } from "./components/PlayerList/PlayerDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/sprawdz/:steamID" element={<PlayerDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
