import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MehndiLandingPage from './MehndiLandingPage';
import App from './App'
import Gallery from './Gallery';
const AppRoutes = () => {
   return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
   )

}
export default AppRoutes;