import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../assets/logo.svg";

const Header = () => {
  const [header, setHeader] = useState("Trade");
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="logo" />
      <ul type="none" className={classes.navList}>
        <li className={classes.navListItem} onClick={() => setHeader("Trade")}>
          <a className={header === "Trade" ? classes.select : ""} href="#">
            Trade
          </a>
        </li>
        <li className={classes.navListItem} onClick={() => setHeader("Earn")}>
          <a className={header === "Earn" ? classes.select : ""} href="#">
            Earn
          </a>
        </li>
        <li
          className={classes.navListItem}
          onClick={() => setHeader("Support")}
        >
          <a className={header === "Support" ? classes.select : ""} href="#">
            Support
          </a>
        </li>
        <li className={classes.navListItem} onClick={() => setHeader("About")}>
          <a className={header === "About" ? classes.select : ""} href="#">
            About
          </a>
        </li>
      </ul>
      <button className={classes.navButton}>Connect wallet</button>
    </nav>
  );
};

export default Header;
