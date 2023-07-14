import React, {useState, useEffect} from "react"
import { breedsArray } from "./DogsList"
import ShowDog from "./ShowDog"


const Search = ({changeBreed, clickedBreed}) => {
    const [inputBreed, setInputBreed] = useState(clickedBreed)

    useEffect(() => {
    setInputBreed(clickedBreed)
  }, [clickedBreed])

    const handleSubmit = (e) => {
    e.preventDefault()
    changeBreed(inputBreed)
  }

  const handleChange = (e) => {
    setInputBreed(e.target.value.toLowerCase())
  }

  return (
    <>
      <form  className="box" onSubmit={handleSubmit}>
          <div className="field">
              <label  className="label is-size-3">
              Wpisz rasę, której szukasz: 
              </label><br />                                                                                                                                                                                          
              <div className="control">
                <input className="input is-warning is-medium is-rounded is-hovered " type="text" value={inputBreed} onChange={handleChange}/>
              </div> 
              <div className="button-break">
              </div>
                <input className="button is-warning is-dark is-medium" type="submit" value="Szukaj" />   
          </div>
      </form>
      <div>
        {breedsArray.includes(clickedBreed || inputBreed) ? <ShowDog breed={inputBreed}/> : null}
      </div>
    </>
  )
}

export default Search