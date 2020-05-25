import React, { Component } from "react";
import FlexImage from "react-native-flex-image";
import { View, Text, Linking } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { H1, H2, H3, Icon, Row } from "native-base";
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
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>BY COLOMBO TIMES</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row-reverse", marginTop: 10 }}
          >
            <TimeAgo
              time={this.props.navigation.getParam("news").date}
              style={{
                fontSize: RFPercentage(1.8),
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
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Row>
            <View style={{ flex: 1 }}>
              <Icon
                name="facebook"
                type="Entypo"
                style={{ color: "#768BB7", fontSize: 40 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="twitter-square"
                type="FontAwesome"
                style={{ color: "#88C5F3", fontSize: 40 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="whatsapp-square"
                type="FontAwesome5"
                style={{ color: "#5AC754", fontSize: 40 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="facebook-messenger"
                type="FontAwesome5"
                style={{ color: "#4DA9FF", fontSize: 40 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="viber"
                type="FontAwesome5"
                style={{ color: "#A486BB", fontSize: 40 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="sms"
                type="FontAwesome5"
                style={{ color: "#98D27D", fontSize: 40 }}
              />
            </View>
          </Row>
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
    );
  }
}

export default NewsDetails;
