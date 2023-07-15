import React from "react"
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-elements">
                    <Link to="/">
                        <img src="/doggo.svg" alt="logo" width="400px"/>
                    </Link>
                    <Link to="/">
                    <img src="/dog-pic.svg" alt="dog" width="400"/>
                    </Link>
                </div> 
            </div>
        </>
    )
}
    
export default Header