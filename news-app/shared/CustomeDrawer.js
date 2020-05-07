//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Icon, Footer } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export default class CustomDrawer extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fwallpaper%2F&psig=AOvVaw2hHd7-hOjiHcCaOPnU0KT4&ust=1585652254796000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjfro6FwugCFQAAAAAdAAAAABAD";
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: "home",
        navOptionName: "Home",
        screenToNavigate: "Home",
      },
      {
        navOptionThumb: "home",
        navOptionName: "Local",
        screenToNavigate: "Local",
      },
      {
        navOptionThumb: "home",
        navOptionName: "International",
        screenToNavigate: "International",
      },
      {
        navOptionThumb: "home",
        navOptionName: "Sports",
        screenToNavigate: "Sports",
      },
    ];
  }
  render() {
    return (
      <LinearGradient
        colors={["#11111", "#11111", "#11111"]}
        style={{ flex: 1 }}
        locations={[0, 0.5, 1]}
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.sideMenuContainer}>
            {/*Top Large Image */}
            {/* <Image
              source={require("../assets/icons/title.png")}
              style={{
                width: Dimensions.get("window").width - 150,
                height: 50,
                marginTop: 10,
              }}
            />
            <Image
              source={require("../assets/icons/start2.png")}
              style={styles.sideMenuProfileIcon}
            /> */}
            {/*Divider between Top Image and Sidebar Option*/}
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#e2e2e2",
                marginTop: 15,
              }}
            />
            {/*Setting up Navigation Options from option array using loop*/}

            <View style={{ width: "100%" }}>
              {this.items.map((item, key) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor:
                      global.currentScreenIndex === key ? "" : "",
                  }}
                  key={key}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ marginRight: 10, marginLeft: 20, flex: 1 }}>
                      <Icon
                        name={item.navOptionThumb}
                        style={{ color: "#ddd" }}
                        size={25}
                      />
                    </View>

                    <View style={{ flex: 6 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color:
                            global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}
                        onPress={() => {
                          global.currentScreenIndex = key;
                          this.props.navigation.navigate(item.screenToNavigate);
                        }}
                      >
                        {item.navOptionName}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={{ alignContent: "flex-start", alignItems: "flex-end" }}
            >
              <Text style={{ color: "#ddd", fontSize: 13 }}>Powered By</Text>
              <Text style={{ color: "#ddd", fontSize: 11 }}>Codezone ©</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 220,
    height: 200,
    borderRadius: 150 / 2,
    width: Dimensions.get("window").width - 150,
  },
});
