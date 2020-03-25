import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './styles.css';


class Header extends Component {
  render() {
    return(
      <div className="container">             

            <h1 className="header-title"> Olá<span>.</span><br></br>Eu sou Matheus</h1>
            <p>Desenvolvedor <span>Front-End</span></p>
            
      </div>
    );
  }
}


export default Header;
