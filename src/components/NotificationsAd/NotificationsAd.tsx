import React, { Component } from "react";

import "./NotificationsAd.css";

export default class NotificationsAd extends Component {
  render() {
    return (
      <div className="NotificationsAd">
        <div className="title">Seja notificado quando um artigo for publicado.</div>
        <div className="content">
          Não tem enrolação, meu caro. Depois de clicar no botão abaixo, uma notificação será enviada ao seu
          dispositivo toda vez que um novo texto aparecer por aqui.
          <br />
          <br />
          Não importa e-mail, nome, nem quantos gatos você tem.
        </div>

        <div className="button-area">
          <button className="accept">eu aceito</button>
        </div>
      </div>
    );
  }
}
