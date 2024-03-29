import React, { useState } from "react";
import styles from "../styles/ButtonWithSidebar.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/better-match-logo-transparent.avif";

const ButtonWithSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.buttonMenu}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <button
        className={`${styles.toggleButton} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.menuList}>
          <li>
            <Link to={"/"}>
              <button onClick={toggleMenu}>
                <div className={styles.btnTxt}>
                  <span className="material-symbols-outlined" translate="no">
                    home
                  </span>
                  Home
                </div>
                <span className="material-symbols-outlined" translate="no">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </li>

          <li>
            <Link to={"/home"}> {/* /live */}
              <button onClick={toggleMenu}>
                <div className={styles.btnTxt}>
                  <span className="material-symbols-outlined" translate="no">
                    live_tv
                  </span>
                  Live Matches
                </div>
                <span className="material-symbols-outlined" translate="no">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </li>

          <li>
            <Link to={"today"}>
              <button onClick={toggleMenu}>
                <div className={styles.btnTxt}>
                  <span className="material-symbols-outlined" translate="no">
                    today
                  </span>
                  Today's Matches
                </div>
                <span className="material-symbols-outlined" translate="no">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </li>

          <li>
            <Link to={`/account`}>
              <button onClick={toggleMenu}>
                <div className={styles.btnTxt}>
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  Account
                </div>
                <span className="material-symbols-outlined" translate="no">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </li>
        </ul>
        <div className={styles.menuLogo}>
          <img src={logo} alt="Logo" />
          <p translate="no">BETTER MATCH</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithSidebar;
