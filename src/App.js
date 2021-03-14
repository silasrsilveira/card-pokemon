import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

export default function App() {

  const [num, setNum] = useState();
  const [name, setName] = useState();


  const getPokemonImg = (num) => `https://pokeres.bastionbot.org/images/pokemon/${num}.png`



  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const img = await axios.get(`https://pokeres.bastionbot.org/images/pokemon/${num}.png`)
    console.log(res);
    setName(res.data.name);
    // setImg(img.data)
  }


  return (
    <div className="header">
      <h1> -- Escolha seu Pokemon -- </h1>
      <div className="pokemon-card-container">

        <div className="pokemon-card">

          <div className="background">
            <img src={getPokemonImg(num)} className="image" />
          </div>

          <div className="content">
            <span className="pokemon-type">Pokemon</span>
            <h1 className="pokemon-name"> {name}</h1>


            <div className="pokemon-stats">
              <p>Power: 100</p>
              <p>Damage: 95</p>
              <p>Friendly: 90</p>
              <p>Attacks: Electro ball</p>

              <div className="pokemon-logo">Pokemon Cards</div>

              <div className="input">
                <input onChange={(event) => {
                  setNum(event.target.value)
                }} value={num} placeholder="Type one number" /><p />
                <button onClick={() => getData()}>Carregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}