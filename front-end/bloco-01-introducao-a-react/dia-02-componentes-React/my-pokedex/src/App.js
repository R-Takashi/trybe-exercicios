import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './components/data'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
  }
}

export default App;
