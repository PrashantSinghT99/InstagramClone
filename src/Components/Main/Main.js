import React from 'react'
import './Main.scss'
import Header from "../Header/Header"
import Posts from "../Posts/Posts"
import Rightbar from "../Rightbar/Rightbar"
const Main = () => {
  return (
    <div className='Main'>
        <div className="left">
    <Header/>
    <Posts/>
    </div>
    <div className="right">
    <Rightbar/>
    </div>
    </div>
  )
}

export default Main