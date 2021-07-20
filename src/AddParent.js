import React, {Component} from "react";
// import './Demo.css'
import Container from "./Container";
import randomColor from "randomcolor";
import Draggable from 'react-draggable';

let num = 0;
let x = 100;


class AddParent extends Component {

    onStart = (e, ui) => {
        e.preventDefault();
        e.stopPropagation();
    };

    state = {
        body: <Draggable id={num} bounds="parent" ref={el => this.dragRef.current[num] = el} onStart={this.onStart}>
            <div id={num} style={{
                width: "fit-content"
            }}><Container id={num} width={x} height={x} color={randomColor()}/></div>
        </Draggable>,
    }

    constructor(props) {
        super(props);
        this.dragRef = React.createRef([]);
        this.dragRef.current = new Array();
    }

    addParent = () => {
        num += 1;
        console.log(num);
        x += 100;

        this.setState({
            body: <Draggable id={num} bounds="parent" axis="both" onStart={this.onStart}
                             ref={el => this.dragRef.current[num] = el}>
                <div id={num} style={{
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