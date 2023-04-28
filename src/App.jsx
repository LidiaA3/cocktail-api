import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react';

import Home from './components/Home/Home'
import About from './components/About/About'
import Cocktail from './components/Cocktail/Cocktail';

import Headplace from './components/Headplace/Headplace'

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => res.json())
      .then(data => setList(data.drinks))
  }, [])

  return <>
      <Headplace />
      <main>
        <Link to="/">Home</Link>
        <Link to="/about">This is a About the store</Link>
        <Routes>
          <Route path="/" element={ <Home elements={list}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/cocktail/:cocktailId" element={ <Cocktail /> }/>
        </Routes>
      </main>
    </>
}

export default App
