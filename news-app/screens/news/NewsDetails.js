import React, { Component } from "react";
import FlexImage from "react-native-flex-image";
import { View, Text } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { H1, H2, H3, Icon } from "native-base";
import TimeAgo from "react-native-timeago";
import { ScrollView } from "react-native-gesture-handler";

export class NewsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getExtraImages = () => {
    this.props.navigation.getParam("news").imagesUrls.map((url) => {
      return (
        <View
          style={{
            overflow: "hidden",
            borderRadius: 7,
            margin: 10,
            marginHorizontal: 25,
          }}
        >
          <FlexImage
            source={{
              uri: url,
            }}
          />
        </View>
      );
    });
  };

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
        <View
          style={{
            backgroundColor: "black",
            padding: 6,
            marginHorizontal: 10,
            borderRadius: 7,
          }}
        >
          <Text
            style={{
              color: "#ddd",
              marginTop: 10,
              textAlign: "center",
              fontSize: RFPercentage(3),
            }}
          >
            {this.props.navigation.getParam("news").header}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row-reverse", marginTop: 10 }}>
          <TimeAgo
            time={this.props.navigation.getParam("news").date}
            style={{
              fontSize: RFPercentage(1.5),
              color: "#494646",
              marginRight: 20,
            }}
          />
          <Icon
            type="Feather"
            name="clock"
            style={{ fontSize: RFPercentage(1.8), marginRight: 3 }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Text style={{ textAlign: "justify" }}>
            {this.props.navigation.getParam("news").newsContent}
          </Text>
        </View>
        <View>
          {this.props.navigation.getParam("news").imagesUrls.map((url) => {
            if (url != "") {
              return (
                <View
                  style={{
                    overflow: "hidden",
                    borderRadius: 7,
                    margin: 10,
                    marginHorizontal: 25,
                  }}
                >
                  <FlexImage
                    source={{
                      uri: url,
                    }}
                    alt="HJ"
                  />
                </View>
              );
            }
          })}
          <View style={{ marginTop: 15 }}>
            <Text style={{ marginHorizontal: 20, fontStyle: "italic" }}>
              Published in{" "}
              <Text style={{ color: "blue" }}>
                {this.props.navigation.getParam("news").newsType}
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ height: 200 }}></View>
      </ScrollView>
    );
  }
}

export default NewsDetails;
