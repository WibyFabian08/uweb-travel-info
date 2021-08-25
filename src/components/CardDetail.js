import React from "react";

import Rating from "@material-ui/lab/Rating";
import award from "../assets/icons/award.jpg";

import restoran from "../assets/images/restoran.png";

const CardDetail = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white rounded-lg shadow-2xl mb-7 card">
      <img src={restoran} className="object-cover w-full" alt="" />
      <div className="px-5 py-3">
        <h2 className="mb-2 font-bold">Restoran Jepang</h2>
        <div className="flex items-center justify-between mb-2">
          <p>Price</p>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Rating</p>
          <Rating name="disabled" value={3} disabled />
        </div>
        <div className="flex items-center justify-between mb-2">
          <img src={award} width={30} alt="award" />
          <p>No 1 in the world</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
