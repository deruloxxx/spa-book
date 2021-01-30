import React from "react";

export class Chat extends React.Component {
    state = {
        isToggle: false,
    }
    private chatClick = () => {
        this.setState(state => ({
            isToggle: true,
        }));
    }
    render() {
        return (
            <div id="spa" onClick={this.chatClick}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </div>
        )
    }
}