import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, serviceName, img, description } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/service/${id}`}>
            <Button variant="info">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
