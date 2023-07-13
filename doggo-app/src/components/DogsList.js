import {React, useState} from "react";
import breeds from "./backup.json"
import ShowDogs from "./ShowDogs";

const breedsArray = Object.keys(breeds.message);

const DogsList = () => {
    const [breed, setBreed] = useState(" ")

    const handleClick = () =>{
        console.log("Clicked")
        setBreed(breed)
    }

    const list = breedsArray.map((element, index) => <li key={index} onClick={handleClick}>{element[0].toUpperCase() + element.slice(1)}</li>)

    return (
        <div>
            <ul>
            Lista ras:
            {list}
            </ul>
            <ShowDogs breed={breed} />
        </div>
    )
}

export {DogsList, breedsArray}