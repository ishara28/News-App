import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import International from "../../screens/International";
import Header from "../../shared/Header";

const screens = {
  International: {
    screen: International,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="International News" />
        ),
      };
    },
  },
};

const InternationalStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "black",
      height: 80,
    },
  },
});

export default InternationalStack;
