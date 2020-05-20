import React, { Component } from "react";
import { firebasedb } from "../config/firebasedb";
import axios from "axios";

export class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // messages: [
      //   {
      //     to: "ExponentPushToken[JQ8VecIOyjFNwMf5EIXOJW]",
      //     sound: "default",
      //     body: "New Note Added",
      //   },
      //   {
      //     to: "ExponentPushToken[czSwidLuAyGoEL8jnrJ7pN]",
      //     sound: "default",
      //     body: "New Note Added",
      //   },
      // ],
      userExpoTokens: [],
      messages: [],
    };
  }

  componentDidMount() {
    firebasedb.ref("/users").on("value", (querySnapshot) => {
      let data = querySnapshot.val() ? querySnapshot.val() : {};
      let newsList = { ...data };
      let newState = [];
      for (let news in newsList) {
        newState.push({
          id: news,
          expoToken: newsList[news].expoToken,
        });
      }
      this.setState(
        {
          userExpoTokens: newState,
        },
        () => console.log(this.state.userExpoTokens)
      );
    });
  }

  setReadyForSendNotifications = () => {
    var mes = [];
    this.state.userExpoTokens.map((token) => {
      mes.push({
        to: token.expoToken,
        sound: "default",
        body: this.props.header,
      });
    });
    this.setState({ messages: mes }, () => this.sendNot());
  };

  sendNot = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.messages),
    }).then(() => console.log("Done!"));
  };

  render() {
    return <div></div>;
  }
}

export default Test;
