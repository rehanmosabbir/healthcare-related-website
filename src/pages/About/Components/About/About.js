import React from "react";

const About = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h2>About us</h2>
        <p>Learn more about Circle Hospital BD</p>
      </div>
      <hr className="w-50 m-auto" />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 py-5">
            <h3 className="display-4 mb-4 w-75 pb-2 border-bottom border-2 border-danger">
              Who we are?
            </h3>
            <p className="pe-5">
              Circle Hospital BD is a tertiary care hospital and the leading
              contributor of private healthcare services in Bangladesh. This has
              been achieved only through consistent commitment to improve the
              lives of people through utmost service excellence since its
              inception on 16th December, 2006. Circle Hospital is one of the
              ventures of Circle Group which is the top business group of the
              country.
            </p>
            <p className="pe-5">
              The reputation of Circle Hospital is the result of quality
              clinical outcome and comprehensive care, made achievable through
              world class integrated healthcare facilities by highly trained
              professionals. Thus, Circle Hospitals strives to meet patients’
              standards through quality healthcare and making a difference in
              their lives.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/NrmLHK3/banner-photo-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
