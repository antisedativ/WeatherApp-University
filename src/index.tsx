import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.scss'
import {ThemeProvider} from "./context/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
);
