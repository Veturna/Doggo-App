import React, { useState } from "react";


const SearchForm = () => {
    const [breed, setBreed] = useState(" ")
    return (
        <from>
            <label>
            Wpisz rasę, której szukasz: <br/>
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)}/>
            </label>
                <input type="submit" value="Szukaj"/>
        </from>
    )
}

export default SearchForm