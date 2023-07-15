import React from "react"
import { useLocation, Link } from 'react-router-dom'


const Navigation = () => {
    
    const location = useLocation();
    const dog = location.pathname === "/"
    const look = location.pathname === "/search"

    return (
            <div className="navigation">
        <div className="navigation-elements">
            {dog && !look ? (
              <div className="icon">
                <img src="/dog-color.png" width="60px" alt="dog-color"/>
                <Link to="/search">
                    <img src="/look-black.png" width="70px" alt="look-black"/>
                </Link>
              </div>
            ) : (
              <div className="icon">
                <Link to="/">
                    <img src="/dog-black.png" width="60px" alt="dog-black"/>
                </Link>
                <img src="/look-color.png" width="70px" alt="look-color"/>
              </div>
            )}
        </div>
        </div>
    )
}

export default Navigation