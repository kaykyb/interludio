import React, { Component } from "react";
import CommonHeader from "./components/CommonHeader/CommonHeader";

import "./App.css";
import Home from "./views/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-container">
          <CommonHeader />
        </div>
        <main className="content-container">
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
