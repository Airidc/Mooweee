import React, { ReactElement } from "react";

import logo from "../../assets/icons/logo.svg";
import { useHistory } from "react-router-dom";

export default function Header(): ReactElement {
  const browserHistory = useHistory();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    browserHistory.push("/");
  };

  const toggleOpen = (e: React.MouseEvent) => {
    let menuElem = document.querySelector(".nav");

    if (!menuElem) return;

    if (menuElem.classList.value.indexOf("hide-mobile") < 0) {
      // close menu
      menuElem.classList.add("hide-mobile");
      e.preventDefault();
    } else {
      menuElem.classList.remove("hide-mobile");
      e.preventDefault();
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={goHome}>
          <img src={logo} alt="logo" />
          <h3 className="logo--text">MooWee!</h3>
        </div>
        <div className="nav--hamburger hide-desktop">
          <svg
            className="nav--hamburger-icon"
            height="24"
            viewBox="0 -1 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleOpen}
          >
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </div>
        <nav className="nav show-desktop hide-mobile">
          <ul className="nav--list">
            <li className="nav--list--item">Home</li>
            <li className="nav--list--item">Genres</li>
            <li className="nav--list--item">Trending</li>
            <li className="nav--list--item">Surprise Me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
