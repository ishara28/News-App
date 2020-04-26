import React, { Component } from "react";
import { storage, firebasedb } from "../config/firebasedb";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      age: "",
      url: "",
      image: null,
      progress: 0,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  submitData = () => {
    firebasedb.ref("user").push({
      name: this.state.username,
      age: this.state.age,
      url: this.state.url,
    });
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref("images/" + image.name).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Progress function...
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ progress });
      },
      (error) => {
        //error function...
        console.log(error);
      },
      () => {
        //Complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
            this.submitData();
          });
      }
    );
  };

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          display: "flex  ",
        }}
      >
        <progress value={this.state.progress} max="100" />
        <input
          type="text"
          value={this.state.username}
          placeholder="username"
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <input
          type="text"
          value={this.state.age}
          placeholder="age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
        <br /> <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt="Uploaded images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default Test;
