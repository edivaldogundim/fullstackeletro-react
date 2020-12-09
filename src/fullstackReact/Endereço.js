import React from 'react';

class Endereço extends React.Component{
// function Navegacao(){
   render(){
return(
  
<div> 
<header>

<div className="navbar container-fluid">
   <a className="link" href="Navegacao">FullStack Eletro</a>
   <a className="link" href="Produtos">Produto</a>
   <a className="link" href="Pedido">Pedido</a>
   <a className="link" href="Endereço">Loja</a>
   <a className="link" href="Formulario">Contato</a>
</div>

</header>





<div className="container">

   <h2 className="titulo-endeco">Nossas Lojas</h2>

<div className="local">
   <h2>Rio de Janeiro</h2>
   <ul className="list-group">
   <li className="list-group-item list-group-item-white">Avenida Presidente Vargas, 5000</li>
   <li  className="list-group-item list-group-item-white">Centro</li>
   <li  className="list-group-item list-group-item-white">(21)3333-3333</li>
   </ul>
   </div>

<div className="local">
   <h2>São Paulo</h2>
   <ul className="list-group">
   <li  className="list-group-item list-group-item-white">Avenida Paulista, 985</li>
   <li  className="list-group-item list-group-item-white">Jardins</li>
   <li  className="list-group-item list-group-item-white">(11)98856-9987</li>
   </ul>
   </div>

<div className="local">
   <h2>Santa Catarina</h2>
   <ul className="list-group">
   <li  className="list-group-item list-group-item-white">Rua Major Ávila, 370</li>
   <li  className="list-group-item list-group-item-white">Vila Mariana</li>
   <li  className="list-group-item list-group-item-white">(47) 5555-5555</li>
   </ul>
</div>
</div>

</div>



)
}  
}

export default Endereço;