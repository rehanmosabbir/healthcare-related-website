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
          <Card.Title className="border-bottom pb-3">{serviceName}</Card.Title>
          <Card.Text className="border-bottom pb-3">
            {description.slice(0, 200)}...
          </Card.Text>
          <Link to={`/service/${id}`}>
            <Button variant="danger">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
