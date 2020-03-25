import React from 'react';
import Header from './components/Header/index';
import Sobre from './components/Sobre/index';
import Formacao from './components/Formacao/index';
import Conhecimento from './components/Conhecimento/index';
import Contato from './components/Contato/index';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


import './styles.css';

function App() {

  return (
    <div className="App">     
     
    
        <Header />      
        <Sobre />
        <Formacao />
        <Conhecimento />
        <Contato />
     
    </div>
  );
}

export default App;
