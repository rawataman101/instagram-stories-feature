import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/insta.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.image} src={logo} alt="instagram" />
    </div>
  );
}

export default Logo;
