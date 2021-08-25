import React, { useEffect, useState, createRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import CardDetail from "./CardDetail";

const List = ({ category, setCategory, childClicked, places, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);
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
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        places &&
        places.map((place, index) => {
          return (
            <CardDetail
              key={index}
              ref={elRefs[index]}
              selected={Number(childClicked) === index}
              refProp={elRefs[index]}
              place={place}
            ></CardDetail>
          );
        })
      )}
    </div>
  );
};

export default List;
