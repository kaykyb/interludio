import React, { Component } from "react";

import "./Home.css";
import HeadingPost from "../../components/HeadingPost/HeadingPost";
import NotificationsAd from "../../components/NotificationsAd/NotificationsAd";
import ArticleList from "../../components/ArticleList/ArticleList";
import HomePlusButton from "../../components/HomePlusButton/HomePlusButton";
import Spinner from "../../components/Spinner/Spinner";

interface HomeState {
  isLoading: boolean;
}

export default class Home extends Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: true
    };

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 5000);
  }

  render() {
    return (
      <div className="Home">
        {this.state.isLoading && (
          <div className="loading-container">
            <Spinner />
          </div>
        )}
        {!this.state.isLoading && (
          <>
            <HeadingPost />
            <div className="notifications-ad-container">
              <NotificationsAd />
            </div>

            <div className="notifications-ad-container">
              <ArticleList />
            </div>

            <HomePlusButton />
          </>
        )}
      </div>
    );
  }
}
