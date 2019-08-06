import React, { Component } from "react";

import "./ArticleItem.css";

import keyboard from "../../assets/dev/01.jpg";

export default class ArticleItem extends Component {
  render() {
    return (
      <div className="ArticleItem">
        <div className="image" style={{ backgroundImage: "url(" + keyboard + ")" }} />
        <div className="details">
          <div className="date">4 de agosto</div>
          <h2>Controle de mentes</h2>
          <div className="summary">facebook.com</div>
        </div>
      </div>
    );
  }
}
