import React from 'react';
import pagamento from './formas-pagamento.png';

class Footer extends React.Component{
// function Navegacao(){
   render(){
return(
  
   <div className="jumbotron">
   <div className="Footer">
      <footer>
         <p><b>Formas de pagamento:</b></p>
        <div className="imgcartao"> <img src={pagamento} alt="formas-pagamento" width="100px"/></div>
         <p>&copy;Recode Pro</p>
       </footer>
    </div>
    </div>
   )
 }
};
export default Footer;