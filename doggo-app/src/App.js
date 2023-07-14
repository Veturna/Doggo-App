import { useState } from "react"
import {HashRouter, Route, Routes} from "react-router-dom"

import {DogsList} from "./components/DogsList"
import Footer from "./components/Footer"
import Search from "./components/Search"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import WrongResults from "./components/WrongResult"
import Navigation from "./components/Navigation"

import './style.css'

const App = () => {
  const [breed, setBreed] = useState("")

  return(
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/wrong-results" element={<WrongResults/>}/>
          <Route path="/" element={<DogsList setBreed={setBreed}/>}/>
          <Route path="/search" element={<Search clickedBreed={breed} changeBreed={setBreed}/>}/>  
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App