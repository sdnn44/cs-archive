import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/Home/Home";
import { PlayerDetails } from "./components/PlayerList/PlayerDetails";
import Contact from "./pages/Contact/Contact";
import Inspect from "./pages/Inspect/Inspect";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Inspect />
              <Contact />
            </>
          }
        />
        <Route path="/sprawdz/:steamID" element={<PlayerDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
