import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services_copy.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const servicesNew = [...services];
  const filteredService = servicesNew.filter(
    (service) => +service.id === +serviceId
  );

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={filteredService[0]?.img} />
            <Card.Body>
              <Card.Title>{filteredService[0]?.serviceName}</Card.Title>
              <Card.Text>{filteredService[0]?.description}</Card.Text>
              <Link to={`/services`}>
                <Button variant="info">Go Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
