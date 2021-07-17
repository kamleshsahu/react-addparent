import React, {Component} from 'react';
import './Demo.css';

const Container = (props) => {
    return <div style={{
        background: `${props.color}`,
        width: `${props.width}px`,
        height: `${props.height}px`
    }}>
        <strong>
            <div className="title">
                Title (after click {props.id})
            </div>
        </strong>
        {props.body}
    </div>
}

export default Container;