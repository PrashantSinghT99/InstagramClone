import "./Rightbar.scss";
import data from "../../data/data.js";
import React from 'react';

const Rightbar = () => {
  return (
    <div className="sidebar">
    <h4>Suggestions For You</h4>
    {data.map((ele) => (
      <div className="sidebarProfile" key={ele.id}>
        <div className="img">
          <img src={ele.profile} alt={ele.id} />
          <div className="name">
            <h3>{ele.name}</h3>
            <span>Follows You</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
    ))}
  </div>

  )}

export default Rightbar