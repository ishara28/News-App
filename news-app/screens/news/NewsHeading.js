import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FlexImage from "react-native-flex-image";
FlexImage;

export class NewsHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url:
        "https://firebasestorage.googleapis.com/v0/b/news-app-15023.appspot.com/o/images%2Fterry-vlisidis-WsEbnsnKbUE-unsplash.jpg?alt=media&token=e04fd5d1-69ef-4478-ade1-cc98d1ccf9ab",
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.pressHandler}
        style={{ flexDirection: "row", margin: 3 }}
      >
        <View style={{ flex: 1, margin: 3 }}>
          <FlexImage
            // source={require("../../assets/1.jpg")}
            source={{ uri: this.state.url }}
            style={{ borderRadius: 5 }}
          />
        </View>
        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
        >
          <Text>කොළඹ ඇතුලු අධි අවධානම් කලාපයේ ඇඳිරිනීතිය සඳුදා ඉවතට.</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsHeading;
