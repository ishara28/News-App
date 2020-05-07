import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FlexImage from "react-native-flex-image";

export class NewsHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", margin: 5 }}
        onPress={this.props.pressHandler}
      >
        <View
          style={{
            flex: 1,
            margin: 3,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <FlexImage
            source={{ uri: this.props.news.headerImgUrl }}
            style={{ borderRadius: 5 }}
          />
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Text>{this.props.news.header}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsHeading;
