import React, { Component } from "react";
import FlexImage from "react-native-flex-image";
import { View, Text } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { H1, H2, H3 } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
export class NewsDetails extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ overflow: "hidden", borderRadius: 7, margin: 10 }}>
          <FlexImage
            source={{
              uri: this.props.navigation.getParam("news").headerImgUrl,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: RFPercentage(3),
          }}
        >
          {this.props.navigation.getParam("news").header}
        </Text>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "justify" }}>
            {this.props.navigation.getParam("news").newsContent}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default NewsDetails;
