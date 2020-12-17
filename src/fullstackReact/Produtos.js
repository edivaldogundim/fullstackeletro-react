import React from 'react';
import logo from './logo.png';
import {useState, useEffect} from 'react';
import './Estilo.css';

class Produtos extends React.Component {
    
    let destaque = (imagem)=>{
        imagem.width = 210;
        }
    
        let tirazoom = (imagem)=>{
            imagem.width = 140;
            }
    
    const [ Produtos, setProdutos ] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost/backend/getContent.php")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
        
    }, []); 


    function exibir_todos() {
        let elementos = document.getElementsByClassName('box-produtos');
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
    }

    function exibir_categorias(categorias) {
        let elementos = document.getElementsByClassName('box-produtos');
        for(let i = 0; i < elementos.length; i++){
            if (categorias === elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }

    return(

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
            <div className="categoriaprodutos">
               
                <h1>Nossos produtos</h1>
                
               
                <h4>Categorias</h4>
                
                <nav className="nav">
                    <ul className="list-group">
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#"  onClick={exibir_todos}>Todos (12)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('geladeira')}>Geladeiras (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('fogao')}>Fogões (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('microondas')}>Microondas (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1"> 
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#"  onClick={() => exibir_categorias('lavadouraderoupa')}>Lavadora de roupas (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('lavaloucas')}>Lava-louças (2)</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container-margem pl-5">
                <div className="row">
                    {produtos.map((item) =>{
                        
                        return(

<div class="row mx-md-n5">
<div class="box-produtos" key={item.idproduto} id={item.categoria}>
    <img src={require(`./imagens/${item.imagem}`).default} alt={item.categoria} class="cursorzoom" width="140px" onMouseEnter={destaque}  onMouseOut={tirazoom}>
    <br>
    <div class="descrição">{item.descricao}</div>
    <hr>
    <div class="descrição" ><strike>R${item.preco}</strike></div>
    <div class="text-danger" style="font-size:30px;">R${item.precofinal}</div>
</div>
</div>
                        )            
                    })}
                </div>
            </div>
         </div>
    )
}
  
export default Produtos;
           
