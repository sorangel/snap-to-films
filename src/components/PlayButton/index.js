import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

import "./PlayButton.css";


export default class PlayButton extends Component {
  render() {
    return (
        <div onClick={this.props.showMovie} className="play-button">
          <div className="icon">
            <FontAwesomeIcon icon={faPlay}/>
          </div>

          <div className="text">
            <span>Ver</span>
          </div>
        </div>
    )
  }
}
