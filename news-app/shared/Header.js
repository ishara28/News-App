import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { setTheme } from "../redux/actions/Themes";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View style={styles.header}>
        <AntDesign
          name="menu-fold"
          size={28}
          onPress={this.openMenu}
          style={styles.icon}
          color="#ddd"
        />
        <View>
          <Text style={styles.headerText}>{this.props.headerText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTT: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: RFPercentage(4),
    letterSpacing: 1,
    color: "#ddd",
  },
  icon: {
    marginRight: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    color: state.themeReducer.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (color) => dispatch(setTheme(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
