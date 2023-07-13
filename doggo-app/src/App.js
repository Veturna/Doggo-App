import { useState } from "react";

import {DogsList} from "./components/DogsList";
import Search from "./components/Search";
import ShowDogs from "./components/ShowDogs";


const App = () => {
    const [breed, setBreed] = useState(" ")

    const changeBreed = (searchingBreed) => {
        setBreed(searchingBreed)
    }

  return(
    <>
      <DogsList/>
      <Search changeBreed={changeBreed}/>
      <ShowDogs breed={breed}/>
    </>
  )
}

export default App;
