import React, { Component } from 'react';

import './styles.css';

// import { Container } from './styles';

export default class Conhecimento extends Component {
  render() {
    return (
      <div className="container-hab">
        
        <h1>Conhecimentos</h1>        

        <article>
          
            <li><span>Front-End </span>JavaScript, React, React Native, HTML, CSS, BootStrap</li>
            <li><span>Operações </span>Git</li>
            <li><span>Conceitos </span>Kanban, Scrum</li>            
          
        </article>
        
        
      </div>
    );
  }
}
