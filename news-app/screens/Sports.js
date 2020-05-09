import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import PTRView from "react-native-pull-to-refresh";
import NewsHeading from "./news/NewsHeading";
import { firebasedb } from "../config/db";

export class Sports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: [],
    };
  }

  componentDidMount = () => {
    firebasedb.ref("/news").limitToFirst(50).on("value", (querySnapshot) => {
      let data = querySnapshot.val() ? querySnapshot.val() : {};
      let newsList = { ...data };
      let newState = [];
      for (let news in newsList) {
        if (newsList[news].newsType == "Sports") {
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
      this.setState({
        newsList: newState,
      });
    });
  };

  refresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  render() {
    let copied = [...this.state.newsList];
    return (
      <PTRView onRefresh={this.refresh}>
        <ScrollView>
          {/* {copied.reverse().map((news) => {
        return (
          <NewsHeading
            news={news}
            pressHandler={() =>
              this.props.navigation.navigate("NewsDetails", { news: news })
            }
          />
        );
      })} */}

          <FlatList
            data={copied.reverse()}
            renderItem={({ item }) => (
              <NewsHeading
                news={item}
                pressHandler={() =>
                  this.props.navigation.navigate("NewsDetails", { news: item })
                }
              />
            )}
          />
        </ScrollView>
      </PTRView>
    );
  }
}

export default Sports;
