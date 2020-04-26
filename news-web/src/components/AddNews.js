import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class AddNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      newsType: "",
      newsContent: "",
      headerImgUrl: "",
      newsImages: [],
    };
  }

  render() {
    return (
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
              onChange={(e) => this.setState({ newsType: e.target.value })}
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
              onChange={(e) => this.setState({ newsContent: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Button variant="primary">Submit News</Button>
      </div>
    );
  }
}

export default AddNews;
