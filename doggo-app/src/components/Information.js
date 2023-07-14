import React from "react"
import {Link} from "react-router-dom"


const Information = () => {
    return (
        <div className="information">
            <img className="dogPic"src="/PinkDogs.svg" alt="dog-on-pink-background"/>
                <div className= "informationElements">
                    <h3 className="is-size-4">Kochamy pieski różne, śmieszne i nieśmieszne, kochane.
                    Dlatego stworzyliśmy stronę, która jest zbiorem wszystkich istniejących ras.</h3>
                    <h3 className="is-size-4">Klinknij w przycisk poniżej i przekonaj się jak działa nasza wyszukiwarka.</h3>
                    <h3 className="is-size-4">A jak nie znasz jeszcze żadnej rasy to poniżej znajdziesz specjalną listę</h3>
                    <Link to={"/search"} className="button"><strong>Znajdź swoją ulubioną rasę</strong></Link>
                </div>
        </div>
    )
}

export default Information