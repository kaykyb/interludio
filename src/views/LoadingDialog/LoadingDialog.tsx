import React, { Component } from "react";

import "./LoadingDialog.css";
import Spinner from "../../components/Spinner/Spinner";

export default class LoadingDialog extends Component {
  render() {
    return (
      <div className="LoadingDialog">
        <Spinner />
      </div>
    );
  }
}
