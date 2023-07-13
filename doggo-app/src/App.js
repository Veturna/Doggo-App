import { useState } from "react";

import {HashRouter, Route, Routes} from "react-router-dom"

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
    <HashRouter>
      <Routes>
      <Route path="/" element={<DogsList/>}/>
      <Route path="search" element={<Search changeBreed={changeBreed}/>}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App;
