import { useNavigate } from "react-router-dom"

//this is a page that contains the "cards" or boxes used to display data on other pages
//I have them here just to keep the code on other pages a bit cleaner

export default function Pokecard(props){
    const navigate = useNavigate();

    return(
        <div className="card">
            <h4>Name: {props.name}</h4>
            <button onClick={()=>{navigate(`/pokemon/${props.name}`)}}>More Info</button>
        </div>
    )
}

function TypeCard(props){
    return(
        <div className="infoCard">
            <h4>{props.type}</h4>
        </div>
    )
}

export {TypeCard};