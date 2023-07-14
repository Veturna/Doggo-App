import React from "react"
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerElements">
                <Link to="/">
                    <img src="/Doggo.svg" alt="logo"/>
                    </Link>
                    <img src="/DogPic.svg" alt="dog"/>
                </div> 
            </div>
        </>

    )
}
    
export default Header