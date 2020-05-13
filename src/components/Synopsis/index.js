import React, { Component } from "react";
import "./Synopsis.css";

export default class Synopsis extends Component {
  render() {
    return (
        <div className="synopsis">
          <p>{this.props.text}</p>
        </div>
    )
  }
}
