import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigation__list}>
      <li>
        <NavLink activeClassName={styles.navigation__active} className={styles.navigation} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.navigation__active} className={styles.navigation} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
