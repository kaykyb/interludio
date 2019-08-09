import React, { Component } from "react";

import "./HeadingPost.css";

import keyboard from "../../assets/dev/01.jpg";

export default class HeadingPost extends Component {
  render() {
    return (
      <div className="HeadingPost">
        <div className="heading-image" style={{ backgroundImage: "url(" + keyboard + ")" }} />
        <div className="tags-container">
          <div className="leading-tag">TEXTO MAIS RECENTE</div>
          <div className="date-tag">6 de agosto</div>
        </div>
        <h1 className="heading">Um guia para iniciantes sobre como destruir a lua</h1>
        <div className="summary">
          O que têm mais valor: um celular novo ou o carinho dos pais? Uma emoção ou a razão? Os instintos
          naturais ou as paixões? O amor de uma pessoa ou um veículo? Todas estas perguntas têm mesma
          resposta.
        </div>
      </div>
    );
  }
}
