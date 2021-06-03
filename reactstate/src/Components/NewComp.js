import React, { Component } from "react";
import bell from "./bell.png";
import bell2 from "./bell2.png";

class NewComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             message: "Subscribe to our Skilln",
             sub: "Subscribe",
             imageURL: bell
        };
    }
    styles ={
        fontStyle: "italic",
        color: "purple"
      };
    Buttonchange=()=> {
        this.setState({
            message: "Hit on the subscirbe bill icon to never miss an update",
            sub: "Subscribed"
        });
    }

    imageChange= () => {
        this.setState({
            imageURL: bell2,
            message: "Thankyou! Happy learning"
        });
    };

    render() {
        return (
            <div className = "App">
                <h3 style={this.styles} >{this.state.message} </h3>
                <button onClick={this.Buttonchange}> { this.state.sub } </button>
                <p/>
                <img style={this.styles={width: "30px", height:"30px"}} 
                src={this.state.imageURL} 
                onClick={this.imageChange}
                alt=""/>
            </div>
        );
    }
}
export default NewComp;


/*By this code we will display a message and asking the user to subscribe the button to skilln
  Once the user clicked on the subscribe button, we instruct them to hit on bell icon
  and finally we display a Thankyou message 
  
    We are using state. and need to intialize it with the constructor

  */

