import "./Posts.scss";
import data from "../../data/data.js";
import Post from "../Post/Post";

import React from "react";

const Posts = () => {
  return (
    <div className="posts">
      {data.map((ele) => (
        <Post ele={ele} key={ele.id} />
      ))}
    </div>
  );
};

export default Posts;
