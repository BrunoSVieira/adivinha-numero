import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


let numeroAleatorio = Math.floor(Math.random() * 10);



function App() {


  const [input, setInput] = useState("");

  function handleInput(event: ChangeEvent) {
    setInput((event.target as HTMLInputElement).value);  
  }

  useEffect (()=> {
    if((parseInt(input) == numeroAleatorio)) alert("Numero Iguais");
    if(((parseInt(input)+3) == numeroAleatorio )) alert("Você está chegando próximo");
    if(((parseInt(input)+2) == numeroAleatorio )) alert("Você está chegando próximo");
    if(((parseInt(input)+1) == numeroAleatorio )) alert("Você está chegando próximo");
    if(((parseInt(input)-3) == numeroAleatorio )) alert("Você está chegando próximo");
    if(((parseInt(input)-2) == numeroAleatorio )) alert("Você está chegando próximo");
    if(((parseInt(input)-1) == numeroAleatorio )) alert("Você está chegando próximo");
  })


  return (
    <div className="App">
  

<div className='painel-chute'>

    <p>{numeroAleatorio}</p>
    
    <input value={input} onChange={(event) => handleInput(event)}/> 

    <button onClick={()=> setInput('')}>Limpar</button>


    </div>

    </div>
  );
}

export default App;
