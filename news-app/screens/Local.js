import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../db/Config";
import NewsHeading from "./news/NewsHeading";

export class Local extends Component {
  render() {
    return (
      <ScrollView>
        <NewsHeading
          pressHandler={() => this.props.navigation.navigate("NewsDetails")}
        />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
        <NewsHeading />
      </ScrollView>
    );
  }
}

export default Local;
