import React, {useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"

import { breedsArray } from "./DogsList"
import Navigation from "./Navigation"
import ShowDog from "./ShowDog"


const Search = ({changeBreed, clickedBreed}) => {
    const [inputBreed, setInputBreed] = useState(clickedBreed)
    const [showDog, setShowDog] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
    setInputBreed(clickedBreed)
    setShowDog(true)
  }, [clickedBreed])

    const handleSubmit = (e) => {
    e.preventDefault()
    changeBreed(inputBreed)
    if (breedsArray.includes(inputBreed) === false){
        navigate("/wrong-results")
    } else {
      setShowDog(true)
    }
  }

  const handleChange = (e) => {
    setInputBreed(e.target.value.toLowerCase())
    setShowDog(false)
  }

  return (
    <>
      <form  className="box" onSubmit={handleSubmit}>
          <div className="field">
              <label  className="label is-size-3">
              Wpisz rasę, której szukasz: 
              </label>                                                                                                                                                                                        
              <div className="control">
                <input className="input is-warning is-medium is-rounded is-hovered " type="text" value={inputBreed} onChange={handleChange}/>
              </div> 
              <div className="button-break">
              </div>
                <input className="button is-warning is-dark is-medium" type="submit" value="Szukaj" />   
          </div>
      </form>
      <div>
        {showDog && inputBreed && breedsArray.includes(inputBreed) ? <ShowDog breed={inputBreed}/> : null}
      </div>
      <Navigation/>
    </>
  )
}

export default Search