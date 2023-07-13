import {React, useState} from "react";
import {Link} from "react-router-dom"
import breeds from "./backup.json"
import ShowDogs from "./ShowDogs";


const breedsArray = Object.keys(breeds.message);

const DogsList = () => {
    const [breed, setBreed] = useState(" ")

    const handleClick = (clickedBreed) =>{
        console.log("Clicked")
        setBreed(clickedBreed)
    }

    const list = breedsArray.map((element, index) => <li key={index} onClick={() => handleClick(element)}>{element[0].toUpperCase() + element.slice(1)}</li>)

    return (
        <div>
            <ul>
            Lista ras:
            {list}
            </ul>
            <ShowDogs breed={breed} />
            <Link to="search">Poszukaj własnej rasy</Link>
        </div>
    )
}

export {DogsList, breedsArray}