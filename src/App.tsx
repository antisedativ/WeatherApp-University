import React from 'react';
import Header from "./blocks/Header/Header";
import './styles/index.scss'
import Widgets from "./blocks/Widgets/Widgets";
import Info from "./blocks/Info/Info";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="content">
            <Info />
            <Widgets />
        </div>
    </div>
  );
}

export default App;
