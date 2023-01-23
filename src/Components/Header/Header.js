import React from "react";
import "./Header.scss";
import data from "../../data/data.js";

const Header = () => {
  return (
    <div className="Header">
      {data.map((ele) => (
        <div className="status" key={ele.id}>
          <img src={ele.profile} alt={ele.id} />
          <span>{ele.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Header;
