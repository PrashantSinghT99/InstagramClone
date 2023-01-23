import React from 'react'
import "./Post.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Post = ({ele}) => {
  return (
    <div className="post">
      <div className="top">
        <div className="left">
          <img src={ele.profile} alt={ele.id} />
          <span>{ele.name}</span>
        </div>
        <div className="right">
          <MoreVertOutlinedIcon />
        </div>
      </div>
      <div className="postImg">
        <img src={ele.post} alt={ele.id} />
      </div>
      <div className="bottom">
        <div className="left">
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <SendOutlinedIcon />
        </div>
        <div className="right">
          <BookmarkBorderOutlinedIcon />
        </div>
      </div>
      <div className="commentTxt">
        <span>{ele.name}</span>
        <p>{ele.Comment}</p>
      </div>
      <div className="comment">
        <SentimentSatisfiedAltOutlinedIcon />
        <input type="text" placeholder="Add a comment" />
        <span>Post</span>
      </div>
    </div>
  )
}

export default Post