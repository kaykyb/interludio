import React, { Component } from "react";
import CommonHeader from "./components/CommonHeader/CommonHeader";

import "./App.css";
import Home from "./views/Home/Home";
// import LoadingDialog from "./views/LoadingDialog/LoadingDialog";
import SavedDialog from "./views/SavedDialog/SavedDialog";
import InterludeFooter from "./components/InterludeFooter/InterludeFooter";

interface AppState {
  showNoInternetAd: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    const shouldShowNoInternetAd = localStorage.getItem("noInternetConscient");

    this.state = {
      showNoInternetAd: shouldShowNoInternetAd === null
    };
  }

  render() {
    const shouldBlurApp = this.state.showNoInternetAd;

    return (
      <div className="App">
        {this.state.showNoInternetAd && <SavedDialog onUnderstood={this.handleNoInternetUnderstood} />}

        <div className={"content" + (shouldBlurApp ? " blurred" : "")}>
          <div className="header-container">
            <CommonHeader />
          </div>
          <main className="content-container">
            <Home />
          </main>
          <InterludeFooter />
        </div>
      </div>
    );
  }

  handleNoInternetUnderstood = () => {
    localStorage.setItem("noInternetConscient", "true");

    this.setState({
      showNoInternetAd: false
    });
  };
}

export default App;
