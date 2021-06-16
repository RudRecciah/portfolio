import React, {Component} from "react";
import Splash from "./splash.jsx";
import Xp from "./xp.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <Splash/>
        <Xp/>
      </React.Fragment>
    );
  }
}