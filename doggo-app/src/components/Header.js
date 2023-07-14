import React from "react"
import {Link, HashRouter} from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerElements">
                    <img src="/Doggo.svg" alt="logo"/>
                    <img src="/DogPic.svg" alt="dog"/>
                </div> 
            </div>
        </>

    )
}
    
export default Header