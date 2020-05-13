import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import "./MetaInfo.css";

export default class MetaInfo extends Component {
  render() {
    return (
      <div className="meta-info">
        <div className="duration">
          <div className="icon">
              <FontAwesomeIcon icon={faClock} />
          </div>

          <div className="text">
            <span>{this.props.duration}</span>
          </div>
        </div>

        <div className="lenguage">

          <div className="icon">
              <FontAwesomeIcon icon={faGlobeAmericas} />
          </div>

          <div className="text">
            <span>{this.props.lenguage}</span>
          </div>
        </div>

        <div className="ranking">
          <div className="icon">
              <FontAwesomeIcon icon={faStar} />
          </div>

          <div className="text">
            <span>{this.props.ranking}</span>
          </div>
        </div>
      </div>
    );
  }
}
