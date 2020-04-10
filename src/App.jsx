import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from "./components/MyName/MyName";
import Message from "./components/Message/Message";
import Avatar from "./components/Avatar/Avatar";


class App extends React.Component {

    qualities = [
        {id:0, title: 'good-tempered', active: false},
        {id:1, title: 'funny', active: true},
        {id:2, title: 'responsible', active: false},
        {id:3, title: 'kind', active: false}
    ];


    render() {


        return (
            <div className="App">
                <MyName/>
                <Avatar/>
                <Message quality={this.qualities} />
            </div>
        );
    }
}

export default App;
