import React from 'react';
import './Components/Estilo.css';
import Index from './fullstackReact/Index';
import Formulario from './fullstackReact/Formulario';
import Loja from './fullstackReact/Loja';
import Produtos from './fullstackReact/Produtos';
import Contato from './fullstackReact/Contato';
import Footer from './fullstackReact/Footer';
import { BrowserRouter as Router, Swuit, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/"><Index /></Route>
        <Route exact path="/Index"><Index /></Route>
        <Route exact path="/Formulario"><Formulario /></Route>
        <Route exact path="/Loja"><Loja /></Route>
        <Route exact path="/Produtos"><Produtos /></Route>
        <Route exact path="/Contato"><Contato /></Route>
        <Footer />

      </div>
    </Router>
  )
};

export default App;
