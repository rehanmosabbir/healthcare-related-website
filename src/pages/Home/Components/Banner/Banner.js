import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid px-0 mb-5 slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NrmLHK3/banner-photo-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Emergency Service</h2>
            <p>
              EMERGENCY DEPARTMENT is a state if art emergency dept. of
              Bangladesh.This department is staffed with skilled physicians,
              nurses and other medical staffs who are specialized in emergency
              patient care.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/3pzxFz5/banner-photo-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Outdoor Patient Service</h2>
            <p>
              The outpatient department of the hospital can serve 2500 (approx.)
              patients per day through more then 50 examination rooms.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/X5bSkFg/banner-photo-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Indoor Patient Service</h2>
            <p>
              Indoor department deals with admission of patients to hospital.
              The patients are requested to contact IPD Reception counter for
              more details.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/fSG8DBg/banner-photo-4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Executive Health Checkup</h2>
            <p>
              Regular health check-up can find problems before they start.
              Routine health check-up can help determine problems early with
              better chances of treatment and cure.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
