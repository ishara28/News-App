import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import NavbarPage from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddNews from "./components/AddNews";


export class App extends Component {
  // store = () => {
  //   firebasedb.ref("test").push({
  //     name: "Ishara",
  //   });
  // };
  render() {
    return (
      <div className="App">
        <NavbarPage />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/addnews" component={AddNews} />
          {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
        {/* <Test /> */}
        {/* <ProfilePage /> */}
      </div>
    );
  }
}

export default App;
