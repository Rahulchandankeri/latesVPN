import "./App.css";
import "../src/Assets/Styles/sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";
import Featured from "./Components/Featured";
import OurFeatures from "./Components/OurFeatures";
import Plan from "./Components/Plan";
import OurNetwork from "./Components/OurNetwork";
import Testimonials from "./Components/Testimonials";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <React.Fragment>
              <NavBar />
              <Featured />
              <OurFeatures />
              <Plan />
              <OurNetwork />
              <Testimonials />
              <Subscribe />
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
