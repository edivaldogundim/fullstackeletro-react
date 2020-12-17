import React from 'react';
import pagamento from './formas-pagamento.png';

class Footer extends React.Component{
   render(){
return(
  
   <div className="jumbotron">
   <div className="Footer">
      <footer class="text-danger">
         <p><b>Formas de pagamento:</b></p>
        <div> <img src={pagamento} alt="formas-pagamento" width="100px"/></div>
         <p>&copy;Recode Pro</p>
       </footer>
    </div>
    </div>
   )
 }
};
export default Footer;