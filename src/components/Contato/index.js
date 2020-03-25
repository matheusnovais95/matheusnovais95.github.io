import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaAngleDoubleUp } from "react-icons/fa";
import{ Link } from 'react-scroll';
import { MdMail } from "react-icons/md";

import './styles.css';
// import { Container } from './styles';

export default class Contato extends Component {
  render() {
    return (
      <div className="container-footer" id="contato">
          <ul className="header-list">
            <li><MdMail className="icon"></MdMail> mthscampos@gmail.com</li>
            <li><FaGithub className="icon"></FaGithub> <a target="_blank" href="https://github.com/matheusnovais95">matheusnovais95</a></li>
            <li><FaLinkedin className="icon"></FaLinkedin> <a target="_blank" href="https://www.linkedin.com/in/matheus-campos-135430117/">Matheus Novais de Campos</a></li>
            <li><FaWhatsapp className="icon"></FaWhatsapp> +55(15)98148-4135</li>
            <Link className="btn-menu" to="container" smooth={true} duration={900}>
              <FaAngleDoubleUp></FaAngleDoubleUp>
            </Link>
          </ul>
      </div>
    );
  }
}
