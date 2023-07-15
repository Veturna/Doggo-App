import React from "react"
import {Link} from "react-router-dom"


const Information = () => {
    return (
        <div className="information">
            <img className="dog-pic"src="/pink-dogs.svg" alt="dog-on-pink-background"/>
                <div className= "information-elements">
                    <h3 className="is-size-4">Kochamy pieski różne, śmieszne i nieśmieszne, kochane.
                    Dlatego stworzyliśmy stronę, która jest zbiorem wszystkich ras.</h3>
                    <h3 className="is-size-4">Kliknij w przycisk poniżej i przekonaj się jak działa nasza wyszukiwarka.</h3>
                    <h3 className="is-size-4">A jak nie znasz jeszcze żadnej rasy to poniżej znajdziesz specjalną listę. W nią też możesz poklikać.</h3>
                    <Link to={"/search"} className="button"><strong>Znajdź swoją ulubioną rasę</strong></Link>
                </div>
        </div>
    )
}

export default Information