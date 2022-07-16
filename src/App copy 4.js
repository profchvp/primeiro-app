/*
Aula 31 - Trabalhando Listas
*/
import {useState} from 'react';  //para importar Hook
function App() {
 const [entrada,setEntrada]=useState('');
 const [tarefas,setTarefas]=useState([
  'Pagar Conta de Luz',
  'Estudar React JS'
 ]);

   
  function handleRegister(eventox){
    /* onSubmit tem um evento automático para dar "refresh(f5)". Para evitar "preventDefault()"
 */
eventox.preventDefault();
setTarefas([...tarefas,entrada]);
setEntrada('');
  }
  return (
    <div>
      <h1>Formulario</h1>
     <form   onSubmit={handleRegister}>
              <label>Nome da Tarefaq:</label><br/>
              <input placeholder='Informe uma tarefa:'
              value={entrada}
              onChange={(evento)=>setEntrada(evento.target.value)}/><br/>
             
              <br/><br/>
              <button type='submit'>Registrar</button> 

     </form>
     <br/><br/>
     <div>
      <ul>
      
      {tarefas.map(tarefaxx=>(
          <li key={tarefaxx}>{tarefaxx}</li>
      ))}
       
      </ul>
     </div>
    </div>

  );

  }

export default App;
