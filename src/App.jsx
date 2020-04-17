import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from "./components/MyName/MyName";
import Message from "./components/Message/Message";
import Avatar from "./components/Avatar/Avatar";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.newCountRef = React.createRef();
    }

    qualities = [
        {id:0, title: 'good-tempered', active: false},
        {id:1, title: 'funny', active: true},
        {id:2, title: 'responsible', active: false},
        {id:3, title: 'kind', active: false}
    ];

    state = {
        counter: 1
    };


    onAlert = () => {
        let newCount = this.newCountRef.current.value;

        alert(`Hello, ${newCount}`);
        this.newCountRef.current.value = ' ';

        this.setState((state) => ({
            counter: state.counter + 1
        }));
        
    }


    render() {


        return (
            <div className="App">
                <MyName/>
                <Avatar/>
                <Message quality={this.qualities} />
                <div className="click">
                   <span>{this.state.counter}</span>
                   <input ref={this.newCountRef} type="text"/>
                   <button onClick={this.onAlert}> Click </button>
                </div>

            </div>
        );
    }
}

export default App;
