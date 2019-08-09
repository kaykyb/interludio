import React, { Component } from "react";

import "./InterludeFooter.css";

import logoWhite from "../../assets/logo-little-white.svg";

export default class InterludeFooter extends Component {
  render() {
    return (
      <footer className="InterludeFooter">
        <img src={logoWhite} alt="logo" className="logo" />
        <h1 className="title">O Interlúdio</h1>
        <div className="content">
          Um projeto de <a href="https://kaykyb.com">kaykyb.com</a>.
          <br />
          <br />
          Desenvolvido, escrito e desenhado por mim mesmo.
          <br />
          <br />
          Ilustrações e textos são disponibilizados sob a licença Creative Commons CC-BY-SA.
          <br />
          <br />
          Atribua créditos a Kayky de Brito.
        </div>
      </footer>
    );
  }
}
