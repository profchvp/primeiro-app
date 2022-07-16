import React, {useEffect, useState} from 'react';  //para importar Hook
function App() {
  const [counter, setCounter]=useState(0);  
  useEffect(()=>{
document.title=counter;
return()=>document.title="Xuxu";
  },[counter]);
  //
  return (
  <div>
    <h1>{counter}</h1>
    <button onClick={()=> setCounter(counter+1)}>Somar</button>
  </div>
  );
}

export default App;
