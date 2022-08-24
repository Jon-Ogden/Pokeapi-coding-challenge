import './App.css';
import Results from './Results';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';

//this is the heart and soul of the little app i've built. everything comes through here.
//Basically the routes allow me to use the URL to direct 
//the user to different pages and send some info along with them

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
