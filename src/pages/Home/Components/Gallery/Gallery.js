import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container gallery">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">Gallery</h1>
      <hr className="w-50 m-auto mb-5" />
      <div className="row">
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/qdWqW9b/service-1.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/xYX6y98/service-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/XLG9dPH/service-3.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/qJWcVbs/service-4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/KhjKgLW/service-5.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/Vt9JV0y/service-6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
