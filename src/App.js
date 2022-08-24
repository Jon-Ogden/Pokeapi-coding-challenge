import './App.css';
import axios from 'axios';
import Pokecard from './Pokecard';
import { useEffect, useState } from 'react';
import Results from './Results';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:type" element={<Results />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
    </Routes>
    </>
  );
};

export default App;
