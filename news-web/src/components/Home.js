import React, { Component } from "react";
import { firebasedb } from "../config/firebasedb";
import OneNews from "./OneNews";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: [],
    };
  }

  componentDidMount = () => {
    firebasedb.ref("/news").on("value", (querySnapshot) => {
      let data = querySnapshot.val() ? querySnapshot.val() : {};
      let newsList = { ...data };
      let newState = [];
      for (let news in newsList) {
        newState.push({
          id: news,
          header: newsList[news].header,
          headerImgUrl: newsList[news].headerImgUrl,
          newsType: newsList[news].newsType,
          newsContent: newsList[news].newsContent,
          date: newsList[news].date,
        });
      }
      this.setState({
        newsList: newState,
      });
    });
  };

  render() {
    let copied = [...this.state.newsList];
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

export default Home;
