import React from "react";

import CardDetail from "./CardDetail";

const List = ({ category, setCategory, rating, setRating }) => {
  return (
    <div
      className="w-2/6 h-full p-5 mb-5 overflow-x-hidden overflow-y-auto"
      style={{ backgroundColor: "#edf0f5" }}
    >
      <h2 className="mb-3 text-3xl">
        Restoran, Hotel, dan Tempat Hiburan disekitar anda
      </h2>
      <div className="flex items-center mb-5">
        <h2 className="text-lg">Sort By</h2>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 ml-5 bg-white rounded-lg shadow-xl focus:outline-none"
          id=""
        >
          <option className="py-2" value="">
            Category
          </option>
          <option className="py-2" value="restaurants">
            Restoran
          </option>
          <option className="py-2" value="hotels">
            Hotel
          </option>
          <option className="py-2" value="attractions">
            Hiburan
          </option>
        </select>
        <select
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="px-4 py-2 ml-5 bg-white rounded-lg shadow-xl focus:outline-none"
          id=""
        >
          <option className="py-2" value="">
            Rating
          </option>
          <option className="py-2" value="2.0">
            Above 2
          </option>
          <option className="py-2" value="3.0">
            Above 3
          </option>
          <option className="py-2" value="4.0">
            Above 4
          </option>
        </select>
      </div>
      <CardDetail></CardDetail>
      <CardDetail></CardDetail>
    </div>
  );
};

export default List;
