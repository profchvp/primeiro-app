/*
Aula 29 - Trabalhando com useState (Hook)
*/
import Nome from './components/Nome';
import {useState} from 'react';  //para importar Hook
function App() {
  //[1-nome do estado;2)nome da função para trocar o valor do estado] ; ():Valor padrao 
  const [aluno,  setAluno]=useState('Sujeito Programador');
  
  return (
    <div>
      <h1>Bem Vindo !!!</h1>
      <h2>Olá: {aluno} </h2>
      <button onClick={()=>handleChangeName('chvp2')}>Mudar Nome</button>
      <br/>
       
    </div>
  );

  function handleChangeName(nomex){
    setAluno(nomex);
 }
}

export default App;
