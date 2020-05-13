import React, { Component } from "react";
import "./SubTitle.css";

export default class SubTitle extends Component {
  render() {


    return (
      <div className="sub-title">
        <ul className="tags">
          {this.props.tags.map((tag, index) => {
            return (
              <li key={index} className="tag">
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
