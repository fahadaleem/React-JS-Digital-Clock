import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"

import * as serviceWorker from './serviceWorker';
import App from "./App"
import Header from "./components/Header";

const render_function = ()=>{
    ReactDOM.render(<App />, document.getElementById('root')
    );
}

setInterval(render_function,1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
