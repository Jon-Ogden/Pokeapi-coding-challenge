import { useState } from "react"
import { useNavigate } from "react-router-dom";

//not much going on here

export default function Home(){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    return(
        <div className="App">
            <h1>Home</h1>
                <p>Search Pokemon by Type!</p>
                {/* search bar */}
                <input value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
                <button onClick={()=>{navigate(`/results/${search}`)}}>submit</button>
        </div>
    )
}