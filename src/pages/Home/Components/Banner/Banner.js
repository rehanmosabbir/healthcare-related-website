import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container-fluid px-0 mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 vh-100"
            src="https://i.ibb.co/NrmLHK3/banner-photo-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 vh-100"
            src="https://i.ibb.co/3pzxFz5/banner-photo-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 vh-100"
            src="https://i.ibb.co/X5bSkFg/banner-photo-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 vh-100"
            src="https://i.ibb.co/fSG8DBg/banner-photo-4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
