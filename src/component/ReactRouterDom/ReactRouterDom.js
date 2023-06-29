import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Homee';
import Aboutt from './Pages/Aboutt';
import Nofound from './Pages/NoFound'
export default function ReactRouterDom() {
  return (
     <BrowserRouter>
       <Routes >
       < Route path ='/' exact element={<Layout/>} />
         <Route path='/home' exact element={<Home/>}/>
         <Route path ='/about' exact  element ={<Aboutt/>}/>
         <Route path ='/nofound' exact element ={<Nofound/>}/>
       </Routes>
     </BrowserRouter>
  
  )
}
