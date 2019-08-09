import React, { Component } from "react";

import "./Home.css";
import HeadingPost from "../../components/HeadingPost/HeadingPost";
import NotificationsAd from "../../components/NotificationsAd/NotificationsAd";
import ArticleList from "../../components/ArticleList/ArticleList";
import HomePlusButton from "../../components/HomePlusButton/HomePlusButton";
import InterludeFooter from "../../components/InterludeFooter/InterludeFooter";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HeadingPost />
        <div className="notifications-ad-container">
          <NotificationsAd />
        </div>

        <div className="notifications-ad-container">
          <ArticleList />
        </div>

        <HomePlusButton />

        <InterludeFooter />
      </div>
    );
  }
}
