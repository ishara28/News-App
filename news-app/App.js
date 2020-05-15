import React from "react";
import { AppLoading, Notifications } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Navigator from "./routes/drawer/RootDrawer";
import configureStore from "./redux/Store";
import { Provider } from "react-redux";
import Test from "./test/Test";
import * as Permissions from "expo-permissions";
import { firebasedb } from "./config/db";
import Constants from "expo-constants";
import { Vibration, Platform, View } from "react-native";
import { auth } from "firebase";

const Store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      expoPushToken: "",
      notification: {},
    };
  }

  async componentDidMount() {
    // firebase
    //   .auth()
    //   .signInAnonymously()
    //   .then((user) => {
    //     this.registerForPushNotificationsAsync(user);
    //   });
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    // auth()
    //   .signInAnonymously()
    //   .then(() => {
    //     console.log("User signed in anonymously");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/operation-not-allowed") {
    //       console.log("Enable anonymous in your firebase console.");
    //     }
    //     console.error(error);
    //   });
    // auth().onAuthStateChanged((firebaseUser) => {
    //   firebasedb.ref("users").push({
    //     uid: firebaseUser.uid,
    //   });
    // });
  }

  registerForPushNotificationsAsync = async (user) => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      var updates = {};
      updates["/expoToken"] = token;
      firebasedb.ref("users").child(user.uid).update(updates);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={Store}>
        <Container>
          <Navigator />
        </Container>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
