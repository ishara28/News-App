import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { Image, Dimensions } from "react-native";
import CustomDrawer from "../../shared/CustomeDrawer";
import { createAppContainer } from "react-navigation";
import LocalStack from "../stack/LocalStack";
import InternationalStack from "../stack/InternationalStack";
import WeatherStack from "../stack/WeatherStack";
import HomeStack from "../stack/HomeStack";
import SportsStack from "../stack/SportsStack";

const rootDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Local: {
      screen: LocalStack,
    },
    International: {
      screen: InternationalStack,
    },
    Sports: {
      screen: SportsStack,
    },
    Weather: {
      screen: WeatherStack,
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomDrawer,
    //Sidebar width
    drawerWidth: Dimensions.get("window").width - 125,
  }
);

export default createAppContainer(rootDrawNavigator);
