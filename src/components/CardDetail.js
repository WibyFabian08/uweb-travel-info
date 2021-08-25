import React from "react";

import Rating from "@material-ui/lab/Rating";
import award from "../assets/icons/award.jpg";

import restoran from "../assets/images/restoran.png";

const CardDetail = ({place}) => {
  return (
    <div className="w-full overflow-x-hidden bg-white rounded-lg shadow-2xl mb-7 card">
      <img src={place ? place?.photo?.images?.large?.url : restoran} height={100} className="object-cover w-full" alt="" />
      <div className="px-5 py-3">
        <h2 className="mb-2 font-bold">{place?.name}</h2>
        <h2 className="mb-2">{place?.phone}</h2>
        <h2 className="mb-2">{place?.address}</h2>
        <div className="flex items-center justify-between mb-2">
          <p>Price</p>
          <p>{place?.price_level}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Rating</p>
          <Rating name="disabled" value={Number(place?.rating)} disabled />
        </div>
        <div className="flex items-center justify-between mb-2">
          <img src={award} width={30} alt="award" />
          <p className="truncate ...">{place?.ranking}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <a href={place?.website} className="text-sm text-blue-400 hover:underline" target="_blank" rel="noopenner noreferrer">{place?.website}</a>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
