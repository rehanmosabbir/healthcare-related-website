import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faUserMd,
  faAmbulance,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <Container className="my-5">
      <h1 className="text-danger fw-bold text-center mt-5 mb-2">
        Why choose us
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row>
        <Col sm={6} md={6}>
          <Image src="https://i.ibb.co/VgcgTSx/Why-Choose-us.png" thumbnail />
        </Col>
        <Col sm={6} md={6}>
          <Accordion defaultActiveKey="0" className="why-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FontAwesomeIcon
                  className="me-4 text-danger"
                  icon={faPhoneSquareAlt}
                />
                Excellent Services
              </Accordion.Header>
              <Accordion.Body>
                Clinical excellence must be the priority for any health care
                service provider. SQUARE Hospital ensures the best healthcare
                service comprise of professional (clinical) service excellence
                with outstanding personal service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FontAwesomeIcon className="me-4 text-danger" icon={faUserMd} />
                Qualified Doctors
              </Accordion.Header>
              <Accordion.Body>
                SQUARE Hospital aims to provide the highest possible level of
                care by the qualified consultants from India, Singapore, USA, UK
                & quality hospitals in the Middle East. Even the nurses &
                technicians are also proficiently trained from Bangladesh,
                Australia, UK, India and The Philippines.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <FontAwesomeIcon
                  className="me-4 text-danger"
                  icon={faAmbulance}
                />
                Emergency Departments
              </Accordion.Header>
              <Accordion.Body>
                <p className="mb-0">
                  For appointment, emergency, billing & information: 10616
                </p>
                <p className="mb-0">Land phone: +88 02 8144400</p>{" "}
                <p className="mb-0">Mobile no.: +88 01713377775</p>{" "}
                <p className="mb-0">
                  24-hour emergency & ambulance service: +88 01713377775
                </p>{" "}
                <p className="mb-0">Email: info@squarehospital.com</p>
                <p className="mb-0">
                  Facebook: https://www.facebook.com/squarehospital.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <FontAwesomeIcon
                  className="me-4 text-danger"
                  icon={faBuilding}
                />
                Great Infrastructure
              </Accordion.Header>
              <Accordion.Body>
                SQUARE Hospital has 3 buildings on both sides of the Panthapath
                Main Road, connected by an over bridge. The hospital with more
                than 6 lac square feet of space is situated in the central
                region of Dhaka city, capital of Bangladesh.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
