import React, { Component } from 'react'

class CoordinatesButton extends Component {
    onClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}>Get Coordinates</button>
            </div>
        )
    }
}

export default CoordinatesButton

