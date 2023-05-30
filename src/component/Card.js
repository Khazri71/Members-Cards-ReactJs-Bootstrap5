import React from "react";

const Card = (props) => {
  const { member } = props;
  return (
    <>
      <div className="col-sm-12 col-md-6  col-lg-4 mb-3">
        <div className="card">
          <img
            src={member.img}
            className="card-img-top card-image img-fluid "
            alt="Member"
            height={100 + "px"}
            loading="lazy"
          />
          <div className="card-body text-center">
            <h5 className="card-title text-secondary">{member.fullName}</h5>
            <span className="fw-bold">{member.phoneNumber}</span> <br />
            <span> {member.email}</span>
            <br />
            <a href="#" className="btn btn-primary mt-3">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
