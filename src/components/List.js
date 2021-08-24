import React from "react";

import restoran from "../assets/images/restoran.png";
import Rating from "@material-ui/lab/Rating";
import award from "../assets/icons/award.jpg";

const List = () => {
  return (
    <div className="w-2/6 p-5 mb-5 overflow-x-hidden overflow-y-auto" style={{backgroundColor: '#edf0f5'}}>
      <h2 className="mb-3 text-3xl">
        Restoran, Hotel, dan Tempat Hiburan disekitar anda
      </h2>
      <div className="flex items-center mb-5">
        <h2 className="text-lg">Sort By</h2>
        <select
          name=""
          className="px-4 py-2 ml-5 bg-white rounded-lg shadow-xl focus:outline-none"
          id=""
        >
          <option className="py-2" value="">
            Category
          </option>
          <option className="py-2" value="restoran">
            Restoran
          </option>
          <option className="py-2" value="hotel">
            Hotel
          </option>
          <option className="py-2" value="hiburan">
            Hiburan
          </option>
        </select>
        <select
          name=""
          className="px-4 py-2 ml-5 bg-white rounded-lg shadow-xl focus:outline-none"
          id=""
        >
          <option className="py-2" value="">
            Rating
          </option>
          <option className="py-2" value="2">
            Above 2
          </option>
          <option className="py-2" value="3">
            Above 3
          </option>
          <option className="py-2" value="4">
            Above 4
          </option>
        </select>
      </div>
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
    </div>
  );
};

export default List;
