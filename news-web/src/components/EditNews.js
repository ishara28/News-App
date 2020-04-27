import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { storage, firebasedb } from "../config/firebasedb";

export class EditNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      newsType: "",
      newsContent: "",
      headerImage: null,
      headerImgUrl: "",
      newsImages: [],
      progress: 0,
    };
  }

  componentDidMount = () => {
    this.setState({
      header: this.props.news.header,
      newsType: this.props.news.newsType,
      newsContent: this.props.news.newsContent,
      headerImgUrl: this.props.news.headerImgUrl,
    });
  };

  handleChange = (e) => {
    if (e.target.files[0]) {
      const headerImage = e.target.files[0];
      this.setState({ headerImage });
    }
  };

  updateNews = () => {
    let data = {
      header: this.state.header,
      headerImgUrl: this.state.headerImgUrl,
      newsType: this.state.newsType,
      newsContent: this.state.newsContent,
      date:
        new Date().getFullYear().toString() +
        "/" +
        new Date().getMonth().toString() +
        "/" +
        new Date().getDate().toString(),
    };

    firebasedb
      .ref("news")
      .child(this.props.news.id)
      .update(data)
      .then((snapshot) => snapshot.val())
      .catch((error) => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
  };

  handleUpload = () => {
    const { headerImage } = this.state;
    const uploadTask = storage
      .ref("images/" + headerImage.name)
      .put(headerImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ progress });
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(headerImage.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ headerImgUrl: url });
            this.updateNews();
          });
      }
    );
  };

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit News Here
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    <b>News Header</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="news header here..."
                    value={this.state.header}
                    onChange={(e) => this.setState({ header: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>
                    <b>News Type</b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.newsType}
                    onChange={(e) =>
                      this.setState({ newsType: e.target.value })
                    }
                  >
                    <option>Choose Type</option>
                    <option>Local</option>
                    <option>International</option>
                    <option>Entertainment</option>
                    <option>Sports</option>
                    <option>Weather</option>
                    <option>Political</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    <b>News Content</b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={this.state.newsContent}
                    onChange={(e) =>
                      this.setState({
                        newsContent: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlFile">
                  <Form.Label>
                    <b>Header Photo</b>
                  </Form.Label>
                  <Form.Control type="file" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" onClick={this.updateNews}>
                  Update News
                </Button>
              </Form>
              <br />
              <progress value={this.state.progress} max="100" /> <br />
              <img
                src={
                  this.state.headerImgUrl ||
                  "http://via.placeholder.com/400x300"
                }
                alt="Uploaded images"
                width="50%"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditNews;
