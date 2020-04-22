import React from 'react';
import Button from "./Button";
import Text from "./Text";
import classes from './ButtonArea.module.css'



class ButtonArea extends React.Component {




    render() {



        return (
            <div>
                <div className={classes.buttonArea}>
                    <div className={classes.text}>
                        <Text counter={this.props.counter}/>
                    </div>

                    <Button onAddName={this.props.onAddName}/>
                </div>


            </div>
        );
    }
}

export default ButtonArea;
