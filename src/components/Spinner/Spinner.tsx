import React, { Component } from "react";

import "./Spinner.css";

import spinner from "../../assets/spinner-blue.svg";

export default class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <img className="spinner-img" src={spinner} alt="Loading..." />
      </div>
    );
  }
}
