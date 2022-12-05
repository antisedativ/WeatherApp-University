import React from 'react';
import Header from "./blocks/Header/Header";
import './styles/index.scss'
import NextDays from "./blocks/NextDays/NextDays";
import Today from "./blocks/Today/Today";
import Tomorrow from "./blocks/Tomorrow/Tomorrow";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./blocks/Footer/Footer";
import Initial from "./blocks/Initial/Initial";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar />
        <Routes>
            <Route path='/' element={<Initial />}/>
            <Route path='/today' element={<Today />}/>
            <Route path='/tomorrow' element={<Tomorrow />}/>
            <Route path='/next_days' element={<NextDays />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
