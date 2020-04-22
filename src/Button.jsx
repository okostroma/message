import React from 'react';




class Button extends React.Component {
    newCountRef = React.createRef();



    onAddNewName = () => {
        let newName = this.newCountRef.current.value;
        this.newCountRef.current.value = '';
        this.props.onAddName(newName)

    }


    render() {


        return (
            <div>
                <input ref={this.newCountRef} type="text"/>
                <button onClick={this.onAddNewName} > Click </button>
            </div>
        );
    }
}

export default Button;
