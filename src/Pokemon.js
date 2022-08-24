import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { TypeCard } from "./Pokecard";

export default function Pokemon(){
    //grabbing a few hooks for later use
    const params = useParams();
    const navigate = useNavigate();

    //capitalize the name of the pokemon to make it look nicer
    let name = capitalizeFirstLetter(params.name);

    //a bunch of useStates to hold the data we pull before displaying it
    const [loading, setLoading] = useState(true)
    const [types, setTypes] = useState();
    const [games, setGames] = useState();
    const [move, setMove] = useState();
    const [weight, setWeight] = useState();
    const [image, setImage] = useState();

    //function with self explainitory name
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    //function that retreives all data pertaining to the pokemon and filters through it to 
    //return only what we need
    const getInfo = async() => {
        try {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            setTypes(res.data.types);
            setGames(res.data.game_indices);
            setMove(res.data.moves[0].move.name);
            setWeight(res.data.weight);
            setImage(res.data.sprites.front_default);
            console.log(res.data.game_indices[0].version.name)
            setLoading(false)
        } catch (error) {
            alert(error);
        };
    };

    //useEffect to call getInfo function on mount
    useEffect(()=>{
        getInfo();
    },[])

    //a few functions that map over our arrays and turn them into boxes
    const renderTypes = () => {
        return(
            types.map((c,i) => {
                return(
                    <TypeCard key={i} type={c.type.name} />
                );
            })
        );
    };

    const renderGames = () => {
        return(
            games.map((c,i) => {
                return(
                    <TypeCard key={i} type={c.version.name} />
                );
            })
        );
    };

    //a loading state just to make sure all data is loaded before trying to map over the data
    //this should be very fast and the user should not see this for more than a second
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }


    return(
        <div className="App">
            <button onClick={()=>{navigate("/")}}>Home</button>
            <h1>{name}</h1>
            <img src={image} alt={`image of ${name}`} />
            <h2>Types:</h2>
            <div className="container">
                {renderTypes()}
            </div>
            <h2>Games:</h2>
            <div className="container">
                {renderGames()}
            </div>
            <h2>First Move in Pokedex: {move}</h2>
            <h3>Weight: {weight}</h3>
        </div>
    )
}