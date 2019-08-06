import React, { Component } from "react";

import logo from "../../assets/logo-little.svg";

import "./CommonHeader.css";

export default class CommonHeader extends Component {
  render() {
    return (
      <header className="CommonHeader">
        {/* somente mobile */}
        <img className="logo" src={logo} alt="O Interlúdio" />

        <div className="phrase">Bem-vindo ao O Interlúdio.</div>
      </header>
    );
  }
}
