/*
Aula 32 - Requisições http
https://sujeitoprogramador.com/rn-api/?api=posts
*/
import React, {useEffect, useState} from 'react';  //para importar Hook
import './style.css';
function App() {
 const [nutri, setNutri]=useState([]);
//
useEffect(()=>{
  function loadApi(){
let url ='https://sujeitoprogramador.com/rn-api/?api=posts';

fetch(url)
   .then((r)=>r.json())
   .then((json)=>{
      //console.log(json)
      setNutri((json))
   })

}
  loadApi();
},[]);

  return (
  <div className='container'>
    <header>
      <strong>React Nutri</strong>
    </header>
   {nutri.map((itemArray)=>{
      return(
        <article key={itemArray.id} className='post'>
          <strong className='titulo'>{itemArray.titulo}</strong>
          <img src={itemArray.capa} alt={itemArray.titulo} className='capa'/>
          <p className='subtitulo'>
            {itemArray.subtitulo}
          </p>
          <a className='botao'>Acessar</a>
        </article>
      )
   })}
  </div>

);

}

export default App;
