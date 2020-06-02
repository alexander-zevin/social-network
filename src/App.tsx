import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App;
