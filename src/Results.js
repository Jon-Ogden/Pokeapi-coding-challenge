import './App.css';
import axios from 'axios';
import Pokecard from './Pokecard';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Results() {
  const [pokemon, setPokemon] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  //function that retreives all relevant data from database
  const getData = async(type) => {
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      setPokemon(res.data.pokemon);
    } catch (error) {
      alert(error);
    }
  }

  const renderPokemon = () => {
    return(
      pokemon.map((c, i) => <Pokecard name={c.pokemon.name} key={i}/>)
    )
  }
  
  //useEffect to call function that returns the data on mount
  useEffect(()=>{
    getData(params.type);
  },[]);

  return (
    <div className="App">
      <h1>Results for: {params.type} type</h1>
      <button onClick={()=>{navigate('/')}}>Home</button>
      {renderPokemon()}
    </div>
  );
}

export default Results;
