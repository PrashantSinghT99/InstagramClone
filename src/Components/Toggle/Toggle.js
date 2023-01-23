import "./Toggle.scss"
import React from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Toggle = () => {
  return (
    <div className="profile">
    <div className="top">
      <AccountCircleOutlinedIcon />
      <span>Profile</span>
    </div>
    <hr />
    <div className="bottom">
      <span>Log Out</span>
    </div>
  </div>
  )
}

export default Toggle