import React from "react";

import logo from '../assets/icons/uweb.jpg';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <nav className="w-full px-5 bg-indigo-500">
      <div className="flex items-center justify-between" style={{ height: 60 }}>
        <div className="flex items-center">
          <img src={logo} width={30} height={30} alt="logo" />
          <h2 className="ml-2 font-bold text-white">Uweb Travel</h2>
        </div>
        <div className="flex items-center px-4 bg-white rounded-lg">
          <SearchIcon style={{color: 'gray'}} fontSize="large"></SearchIcon>
          <input
            type="text"
            className="px-4 py-2 focus:outline-none"
            placeholder="Search Place..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
