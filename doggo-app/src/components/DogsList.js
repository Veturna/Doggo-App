import React from "react";
import { useNavigate } from "react-router-dom";

import breeds from "./backup.json"


const breedsArray = Object.keys(breeds.message);

const DogsList = ({setBreed}) => {
    const navigate = useNavigate();

    const handleClick = (clickedBreed) => {
        setBreed(clickedBreed)
        console.log(clickedBreed)
        navigate("/search");
    }

    const list = breedsArray.map((element, index) => <li key={index} onClick={() => handleClick(element)}>{element[0].toUpperCase() + element.slice(1)}</li>)

    const firstColumnList = list.slice(0, 25);
    const secondColumnList = list.slice(25, 50);
    const thirdColumnList = list.slice(50, 75)
    const fourthColumnList = list.slice(75)

    return (
        <div className="box">
            <div className="content is-normal">
            <div className="columns">
            <div className="column">
                <ul>
                    <h2>Lista ras:</h2>
                        {firstColumnList}
                </ul>
            </div> 
            <div className="column">
                <ul>
                    {secondColumnList}
                </ul>
            </div>
            <div className="column">
                <ul>
                    {thirdColumnList}
                </ul>
            </div>
            <div className="column">
                <ul>
                    {fourthColumnList}
                </ul>
            </div>
            </div>
            </div>
        </div> 
    )
}

export {DogsList, breedsArray}