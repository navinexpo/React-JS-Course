import React, { Component } from "react";

class Classprops extends Component {
    render() {
        return (
            <div>
               
                <h1>This is a {this.props.name} from {this.props.place} coder shop</h1>
                {/* using prop we can fetch stored data from main component  */}
            </div>
        )
    };
}
export default Classprops;
