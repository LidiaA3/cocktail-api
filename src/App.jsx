import './App.scss'

import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'

import Headplace from './components/Headplace/Headplace'
import Apilist from './components/Apilist/Apilist'

function App() {
  return <>
      <Headplace />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/about">This is a About the store</Link>
      </main>
    </>
}

export default App
