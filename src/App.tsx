import React from 'react';
import Header from "./blocks/Header/Header";
import NextDays from "./blocks/NextDays/NextDays";
import Today from "./blocks/Today/Today";
import Tomorrow from "./blocks/Tomorrow/Tomorrow";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./blocks/Footer/Footer";

import './styles/index.scss'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar />
        <Routes>
            <Route path='/' element={<Today />}/>
            <Route path='/tomorrow' element={<Tomorrow />}/>
            <Route path='/next_days' element={<NextDays />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
