import React, { Component } from "react";

import "./SavedDialog.css";

interface SavedDialogProps {
  onUnderstood?: () => void;
}

export default class SavedDialog extends Component<SavedDialogProps> {
  render() {
    return (
      <div className="SavedDialog">
        <div className="container">
          <div className="heading">
            <h1>
              Volte quando quiser.
              <br />
              Não precisa de internet.
            </h1>
          </div>
          <div className="content">
            Quando você quiser, mesmo sem conexão à internet, você pode ler qualquer artigo recente publicado.
            <br />
            <br />
            Não tem truque: basta acessar o O Interlúdio novamente neste navegador.
            <div className="button-area">
              <button className="understood-button" onClick={this.props.onUnderstood}>
                entendi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
