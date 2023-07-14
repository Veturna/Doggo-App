import { useState } from "react";

import {HashRouter, Route, Routes} from "react-router-dom"

import {DogsList, breedsArray} from "./components/DogsList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ShowDog from "./components/ShowDog";
import Header from "./components/Header"

import './style.css';



const App = () => {
  const [breed, setBreed] = useState("")

  return(
    <>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<DogsList setBreed={setBreed}/>}/>
        <Route path="/search" element={<Search clickedBreed={breed} changeBreed={setBreed}/>}/>
      </Routes>
      <Footer/>
    </HashRouter>

    </>
  )
}

export default App;
