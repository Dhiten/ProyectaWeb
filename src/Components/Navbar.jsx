import React from "react";
import "../assets/styles/Navbar.scss";
import logo from "../assets/images/logo.svg";
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg'
import user from '../assets/icons/user.svg'

import hamb_menu from "../assets/icons/hamb_menu.svg";
export default function Navbar() {
  return (
    <nav>
      <img src={hamb_menu} alt="" className="hamb_menu" />
      <img src={logo} alt="" className="header--logo" />
      <ul className="header--navbar">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Programas</a>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        <li>
          <a href="">Asesor&iacute;a virtual</a>
        </li>
      </ul>
      <ul className="navbar--social-branding">
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#" id="instagram">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#" id="linkedin">
            <img src={linkedin}alt="" />
          </a>
        </li>

        <li>
          <a href="">
            <img src={user} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}