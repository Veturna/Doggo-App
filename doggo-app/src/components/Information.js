import React from "react"
import {Link} from "react-router-dom"


const Information = () => {
    return (
        <div className="information">
                    <img className="dogPic"src="/PinkDogs.svg" alt="dog-on-pink-background"/>
                <div className= "informationElements">
                <div className="content">
                    <h3>Kochamy pieski różne, śmieszne i nieśmieszne, kochane.
                    Dlatego stworzyliśmy stronę, która jest zbiorem wszystkich istniejących ras.</h3>
                    <h3>Klinknij w link poniżej i przekonaj się jak działa nasza wyszukiwarka.</h3>
                    <h3>A jak nie znasz jeszcze żadnej rasy to poniżej znajdziesz specjalną listę</h3>
                    <button><Link to={"/search"}>Znajdź swoją ulubioną rasę</Link></button>
                </div>
                </div>
            </div>
    )
}

export default Information