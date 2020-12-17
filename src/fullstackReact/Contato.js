
import React from 'react';
import logo from './logo.png';
import whats from './whats.jpg';
import Email from './Email.png';
import {useState, useEffect} from 'react'; 

   function Contato(){
      const [mensagens, setMensagens ] = useState([]);
      const [render, setRender] = useState(false);
      const [msg, setMsg] = useState(false);
  

      React.useEffect(async () => {
         const url = "http://localhost/backend/Returnmensagem.php";
         const response = await fetch(url);
         setMensagens(await response.json());
     }, [render]);
 
      
      
      async function envioMensagem(event) {
            event.preventDefault();
            
            let formData = new FormData(event.target);
            
            const url = "http://localhost/backend/mensagem.php";

            fetch(url, {
               method: "POST",
               body: formData
            }).then((response) => response.json()).then((dados) => {
               setRender(!render);
               setMsg(dados);

               setTimeout(() => {
                  setMsg(false)
               }, 3000);

            });
      }

      return (
         <div>
            <header>
 
   <div class="container-fluid bg-danger">
      <nav class="nav nav-pills nav-fill ">
         <a class="nav-item nav-link" href="Index"><img width="100px" src={logo} alt="Full Stack Eletro"></a>
         <a class="nav-item nav-link text-white" href="Produtos">Produtos</a>
         <a class="nav-item nav-link text-white" href="Loja">Nossas lojas</a>
         <a class="nav-item nav-link text-white" href="Contato">Fale conosco</a>
      </nav>
   </div>

</header>
         <div className="container titulo-contato">

            <h1>Contato</h1>

         </div>
            <div  className="container">
               <div class="row ml-5">
                  <img src={Email} alt="Email" width="50px"/>
                  <div className="col">contato@fullstackeletro.com</div>

                  <img src={whats} alt="whats" width="50px"/>
                  <div className="col"> 99999-9999</div>
               </div><br ></br>

               <div onSubmit={envioMensagem} class="col">
                  <div class="input-group">
                     <form>
                        <label for="Nome">Nome</label>
                        <input type="text" className="form-control w-400 px-2" name="nome" placeholder="Nome..."></input><br />
                        <label for="msg">Mensagem</label>
                        <input type="msg" className="form-control w-400 px-2" name="msg" placeholder="Digite sua mensagem..."></input><br />
                        <button type="submit" class="btn btn-danger  m-1">Enviar</button>
                     </form>
                  </div>
               </div>
            </div>
          
        {    
            msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
              Mensagem recebida, e enviada para apuração!
            </div>
          }

          <div className="col-lg-8 mx-auto">
            <div>
                  <div >
                    
                      {mensagens.map((item) =>{
                          return(
              
                              <div key={item.idcoment}>
                                  <div>
                                      Data: {item.data}
                                  </div>
                                  <div>
                                      Nome: {item.nome}
                                  </div>
                                  <div>
                                      Mensagem: {item.mensagem}
                                  </div>
                                  <br/><br/>
                              </div>
                          )            
                      })}
                  </div>
              </div>
            </div>
         </div>
      );
 }


export default Contato;
