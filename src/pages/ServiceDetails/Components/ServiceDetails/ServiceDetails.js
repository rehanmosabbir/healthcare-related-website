import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const servicesNew = [...services];
  const filteredService = servicesNew.filter(
    (service) => +service.id === +serviceId
  );

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={filteredService[0]?.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title border-bottom pb-3">
                {filteredService[0]?.serviceName}
              </h5>
              <p className="card-text">{filteredService[0]?.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/services`}>
        <Button variant="danger">Go Back</Button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
