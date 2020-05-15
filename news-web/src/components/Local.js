import React, { Component } from "react";
import { firebasedb } from "../config/firebasedb";
import OneNews from "./OneNews";
import { Spinner } from "react-bootstrap";

export class Local extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    firebasedb
      .ref("/news")
      .limitToFirst(45)
      .on("value", (querySnapshot) => {
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let newsList = { ...data };
        let newState = [];
        for (let news in newsList) {
          if (newsList[news].newsType == "Local") {
            newState.push({
              id: news,
              header: newsList[news].header,
              headerImgUrl: newsList[news].headerImgUrl,
              imagesUrls: newsList[news].imagesUrls,
              newsType: newsList[news].newsType,
              newsContent: newsList[news].newsContent,
              date: newsList[news].date,
            });
          }
        }
        this.setState(
          {
            newsList: newState,
          },
          () => this.setState({ isLoading: false })
        );
      });
  };

  render() {
    let copied = [...this.state.newsList];
    if (this.state.isLoading) {
      return (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner animation="grow" />
          <p>Loading ...</p>
        </div>
      );
    } else {
      return (
        <div className="container">
          {copied.reverse().map(function (news) {
            return (
              <OneNews
                news={news}
                handleDelete={() => {
                  return firebasedb.ref("news").child(news.id).remove();
                }}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Local;
