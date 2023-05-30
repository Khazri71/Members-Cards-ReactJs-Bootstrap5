import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const { members } = props;

  return (
    <>
      <div className="row mt-4 pb-4">
        {members.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </div>
    </>
  );
};
export default Cards;
