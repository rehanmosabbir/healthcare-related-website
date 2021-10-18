import React from "react";
import "./Apointment.css";

const Apointment = () => {
  return (
    <div className="container-fluid apointment">
      <div className="row">
        <div className="col-md-6 col-sm-6 sec-bg1">
          <div className="text-center mt-5">
            <img
              className="mt-5"
              src="https://i.ibb.co/zsNpdx3/10616.png"
              alt=""
            />
            <br />
            <button className="btn btn-success mt-3">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 sec-bg2"></div>
      </div>
    </div>
  );
};

export default Apointment;
