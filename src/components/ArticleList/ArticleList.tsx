import React, { Component } from "react";

import "./ArticleList.css";
import ArticleItem from "../ArticleItem/ArticleItem";

export default class ArticleList extends Component {
  render() {
    return (
      <div className="ArticleList">
        <div className="item">
          <ArticleItem />
        </div>
        <div className="item">
          <ArticleItem />
        </div>
      </div>
    );
  }
}
