import React from "react";

const Header = (props) => {
  const { handleShow } = props;
  return (
    <>
      <div className="text-center pt-3 mb-3">
        <h1 className="mb-3 text-primary">Our Members</h1>
        <button
          type="button"
          className="btn btn-danger me-3"
          onClick={handleShow}
        >
          Show Member
        </button>
      </div>
    </>
  );
};

export default Header;
