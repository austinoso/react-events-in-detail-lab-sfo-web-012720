import React, { Component } from 'react'

class DelayedButton extends Component {
    onClick = (event) => {
        event.persist()
        setTimeout((e = event) => this.props.onDelayedClick(e), this.props.delay)
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}>Delayed Click</button>
            </div>
        )

    }
}

export default DelayedButton