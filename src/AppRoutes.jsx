import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MehndiLandingPage from './MehndiLandingPage';
import App from './App'
import Gallery from './Gallery';
import PalmLandingPage from './palmDesignLandingPage'
import ArabicLandingPage from './arabicDesignLandingPage'
import FlowerLandingPage from './flowerDesignLandingPage'
import TattosLandingPage from './tattosDesignLandingPage'
import MandalaLandingPage from './mandalaDesignLandingPage'

const AppRoutes = () => {
   return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/palmPage" element={<PalmLandingPage/>} />
            <Route path="/arabicPage" element={<ArabicLandingPage/>} />
            <Route path="/flowerPage" element={<FlowerLandingPage/>} />
            <Route path="/tattosPage" element={<TattosLandingPage/>} />
            <Route path="/mandalaPage" element={<MandalaLandingPage/>} />
        </Routes>
    </BrowserRouter>
   )    

}
export default AppRoutes;