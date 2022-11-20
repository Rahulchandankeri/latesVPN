import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/sass/layouts/navbar.scss";
import logo from "../Assets/Images/lasles.svg";
import menu from "../Assets/Images/menu.png";
function NavBar() {
  const [checked, setChecked] = useState(true);
  const [width, height] = useWindowSize();
  const handleNav = () => {
    setChecked((x) => !x);
  };
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth > 1100) setChecked(true);
        if (window.innerWidth < 1100) setChecked(false);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  return (
    <header className="nav-bar">
      <div className="wrapper">
        <div className="nav-bar-logo">
          <img src={logo} alt="logo" />
        </div>
        <input type="checkbox" name="checked" id="checked" />
        <label htmlFor="checked" onClick={() => handleNav()} className="nav-btn">
          <img src={menu} alt="logo" />
        </label>
        <div className={checked === true ? "nav-wrapper show" : "nav-wrapper hide"}>
          <div className="header-links">
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/features"}> Features</Link>
              </li>
              <li>
                <Link to={"/pricing"}>Pricing </Link>
              </li>
              <li>
                <Link to={"/testimonails"}> Testimonals</Link>
              </li>
              <li>
                <Link to={"/help"}> Help</Link>
              </li>
            </ul>
          </div>
          <div className="authOptions">
            <div className="auth-links">
              <Link to={"/sign-in"} className="signin">
                Sign in
              </Link>
              <Link to={"/sign-up"} className="cta-btn nav-btn">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
