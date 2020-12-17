import React from 'react';
import logo from './logo.png';

 class Index extends React.Component {

   render() {
      return (
         <div>
         <header>
 
   <div class="container-fluid bg-danger">
      <nav class="nav nav-pills nav-fill ">
         <a class="nav-item nav-link" href="Index"><img width="100px" src={logo} alt="Full Stack Eletro"/></a>
         <a class="nav-item nav-link text-white" href="Produtos">Produtos</a>
         <a class="nav-item nav-link text-white" href="Loja">Nossas lojas</a>
         <a class="nav-item nav-link text-white" href="Contato">Fale conosco</a>
      </nav>
   </div>
         </header>

   <div class="container-fluid">
      <div class="jumbotron bg-light"> 
      <h2 class="display-4">Seja bem vindo(a)!</h2>
      <p class="lead">Aqui na nossa loja, <em>Programadores tem desconto</em> nos produtos para sua casa!</p>
      </div>
   </div> 


      )
   }
}

export default Index;