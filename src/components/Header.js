import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";

import React from "react";
import logo from "../assets/icons/uweb.jpg";

const Header = ({ onLoad, onPlaceChanged }) => {
  return (
    <nav className="w-full px-5 bg-indigo-500">
      <div className="flex items-center justify-between" style={{ height: 60 }}>
        <div className="flex items-center">
          <img src={logo} width={30} height={30} alt="logo" />
          <h2 className="ml-2 font-bold text-white">Uweb Travel</h2>
        </div>
        <div className="flex items-center px-4 bg-white rounded-lg">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <>
              <SearchIcon
                style={{ color: "gray" }}
                fontSize="large"
              ></SearchIcon>
              <input
                type="text"
                className="px-4 py-2 focus:outline-none"
                placeholder="Search Place..."
              />
            </>
          </Autocomplete>
        </div>
      </div>
    </nav>
  );
};

export default Header;
