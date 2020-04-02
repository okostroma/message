import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from "./components/MyName/MyName";
import Message from "./components/Message/Message";
import Avatar from "./components/Avatar/Avatar";


const App = () => {
    return (
        <div className="App">
            <MyName/>
            <Avatar/>
            <Message/>
        </div>
    );
}

export default App;
