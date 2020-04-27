import React, { Component } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Button, Col, Row, Card, Accordion, Modal } from "react-bootstrap";
import EditNews from "./EditNews";

export class OneNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
    };
  }

  render() {
    return (
      <div className="container" style={{ width: "70%" }}>
        <div className="row" style={{ marginTop: 20 }}>
          <Col>
            <img width="100%" src={this.props.news.headerImgUrl} alt="" />
          </Col>
          <Col xs={7}>
            <Row>
              <FaHandPointRight size={30} />
              <h3>{this.props.news.header}</h3>
            </Row>
            <h5 style={{ float: "right" }}>{this.props.news.date}</h5>
            <Row>
              <Button
                variant="primary"
                onClick={() => this.setState({ modalShow: true })}
              >
                Edit
              </Button>{" "}
              <span>&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;</span>
              <Button variant="danger" onClick={this.props.handleDelete}>
                Delete
              </Button>{" "}
              <span>&nbsp;&nbsp;</span>
            </Row>
          </Col>
        </div>
        <Accordion>
          <Card>
            <Card.Header style={{ backgroundColor: "#343A40" }}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                style={{ color: "#ddd" }}
              >
                Show More...
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ textAlign: "justify" }}>
                {this.props.news.newsContent}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <EditNews
          news={this.props.news}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </div>
    );
  }
}

export default OneNews;