import React, {useEffect} from "react";
import { useNavigate} from "react-router-dom"

import breeds from "./backup.json"
import Break from "./Break"
import Information from "./Information"
import Navigation from "./Navigation";


const breedsArray = Object.keys(breeds.message)

const DogsList = ({setBreed}) => {
    const navigate = useNavigate()

    const handleClick = (clickedBreed) => {
        setBreed(clickedBreed)
        navigate("/search")
    }

    const list = breedsArray.map((element, index) => <li key={index} onClick={() => handleClick(element)}>{element[0].toUpperCase() + element.slice(1)}</li>)

    const firstColumnList = list.slice(0, 25)
    const secondColumnList = list.slice(25, 55)
    const thirdColumnList = list.slice(55, 85)
    const fourthColumnList = list.slice(85)

    return (
        <>
            <Information />
            <Break/>
            <div className="box">
                <h2 class="is-size-1"><strong>Lista ras</strong></h2>
                <div className="columns">
                    <div className="column">
                        <ul className="custom-bullet">
                            {firstColumnList}
                        </ul>
                    </div> 
                    <div className="column">
                        <ul className="custom-bullet">
                            {secondColumnList}
                        </ul>
                    </div>
                    <div className="column">
                        <ul className="custom-bullet">
                            {thirdColumnList}
                        </ul>
                    </div>
                    <div className="column">
                        <ul className="custom-bullet">
                            {fourthColumnList}
                        </ul>
                    </div>
                </div>
                <img className="pumpkin-dog" src="/pumpkin-dog.png" alt="pumpkin-dog"/>
            </div> 
            <Navigation/>
        </>
    )
}

export {DogsList, breedsArray}