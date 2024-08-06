
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './pages/About';
import Techskill from './pages/Techskill';
import Projects from './pages/Projects';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/skills' element={<Techskill/>}  />
      <Route path='/projects' element={<Projects/>}  />

    </Routes>
       
    </>
  )
}

export default App
