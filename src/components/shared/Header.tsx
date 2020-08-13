import React, { ReactElement, useRef } from "react";

import logo from "../../assets/icons/logo.svg";
import { useHistory, Link } from "react-router-dom";

export default function Header(): ReactElement {
  const browserHistory = useHistory();
  const searchQuery = useRef<HTMLInputElement>(null);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    browserHistory.push("/");
  };

  const goToSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!searchQuery.current || !searchQuery.current.value) {
      if (
        searchQuery.current &&
        !searchQuery.current.classList.contains("error")
      ) {
        searchQuery.current.classList.add("error");
        searchQuery.current.placeholder =
          "Have you forgot to enter movie title? 🤨";
      }

      return;
    }

    console.log("current exists");

    browserHistory.push(`/search/${searchQuery.current?.value}`);
    searchQuery.current.value = "";
  };

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.classList.contains("error")) {
      e.currentTarget.classList.remove("error");
    }

    e.currentTarget.placeholder = "Got any particular movie in mind?";
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
          <div className="search--input--area">
            <input
              ref={searchQuery}
              onFocus={onInputFocus}
              type="text"
              className="search--input"
              placeholder="Got any particular movie in mind?"
              name="search"
              id=""
            />

            <button onClick={goToSearch}>Search</button>
          </div>
          <ul className="nav--list" onClick={toggleOpen}>
            <li className="nav--list--item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav--list--item">
              <Link to="/genres">Genres</Link>
            </li>
            <li className="nav--list--item">
              <Link to="/random">Surprise Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
