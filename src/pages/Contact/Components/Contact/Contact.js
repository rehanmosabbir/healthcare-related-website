import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarked,
  faPhoneVolume,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5">
            <h5 className="mb-4">Contact Details</h5>
            <hr className="w-50" />
            <div className="pe-5">
              <p>
                <FontAwesomeIcon
                  className="me-3 text-danger fs-4"
                  icon={faMapMarked}
                />
                152/2/A-2, Green Road Rowshan Tower, <br /> 4th Floor,
                Panthapath Signal, Dhaka-1205
              </p>
              <p>
                <FontAwesomeIcon
                  className="me-3 text-danger fs-4"
                  icon={faPhoneVolume}
                />
                01972 277 866
              </p>
              <p>
                <FontAwesomeIcon
                  className="me-3 text-danger fs-4"
                  icon={faMobileAlt}
                />
                016 30 31 30 31
              </p>
              <p>
                <FontAwesomeIcon
                  className="me-3 text-danger fs-4"
                  icon={faEnvelope}
                />
                info@circlehospitalbd.com
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="mb-3">Contact Us</h2>

            <Form>
              <Row className="my-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I consent to having this website store my submitted information so they can respond to my inquiry.*"
                />
              </Form.Group>

              <Button variant="danger" type="submit">
                SEND
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
