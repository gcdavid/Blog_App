import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="" />
      <span>Made with React.js and Typescript</span>
    </footer>
  );
};

export default Footer;
