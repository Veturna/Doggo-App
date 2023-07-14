import React, {useState, useEffect} from "react";
import { breedsArray } from "./DogsList";
import ShowDog from "./ShowDog";

const Search = ({changeBreed, clickedBreed}) => {
    const [inputBreed, setInputBreed] = useState(clickedBreed)

    useEffect(() => {
    setInputBreed(clickedBreed);
  }, [clickedBreed]);

    const handleSubmit = (e) => {
    e.preventDefault();
    changeBreed(inputBreed)
  };

  const handleChange = (e) => {
    setInputBreed(e.target.value);
  };

  return (
    <div>
    <form  className="box" onSubmit={handleSubmit}>
        <div className="field ">
            <label  className="label">
                Wpisz rasę, której szukasz: 
            </label><br />                                                                                                                                                                                          
            <div className="control">
                <input className="input is-info is-normal is-rounded " type="text" value={inputBreed} onChange={handleChange} />
            </div>
        </div>
        <input className="button is-info " type="submit" value="Szukaj" />
    </form>
    {breedsArray.includes(clickedBreed || inputBreed) ? <ShowDog breed={inputBreed}/> : <p>Nie mamy takiego psiaka w bazie. Spróbuj wyszukać inną rasę</p>}
    </div>
  );
};

export default Search