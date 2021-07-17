import React, {Component} from "react";
// import './Demo.css'
import Container from "./Container";
import randomColor from "randomcolor";
import Draggable from 'react-draggable';

let num = 0;
let x = 100;


class AddParent extends Component {

    state = {
        body: <Draggable bounds="parent">
            <div style={{
                width: "fit-content"
            }}><Container id={num} width={x} height={x} color={randomColor()}/></div>
        </Draggable>,
    }

    addParent = () => {
        num += 1;
        console.log(num);
        x += 100;

        this.setState({
            body: <Draggable bounds="parent">
                <div style={{
                    width: "fit-content"
                }}><Container id={num} width={x} height={x} body={this.state.body} color={randomColor()}/></div>
            </Draggable>
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.addParent}>addParent</button>
                </div>
                <div style={{
                    width: "100vw",
                    height: "100vh"
                }}>{this.state.body}</div>
            </div>
        )
    }

}

export default AddParent;