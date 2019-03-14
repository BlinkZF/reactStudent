import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActivitiesNav.css'

class ActivitiesNav extends  React.Component{
   render(){
       return(
            <div className = "activities-nav">
                <NavLink to = "../../activities/recommended/Recommended.js">推荐</NavLink>
                <NavLink to = "../../activities/all/All.js">综合</NavLink>
                <NavLink to = "../../activities/pins/Pins.js">热点</NavLink>
                <NavLink to = "../../activities/articles/Articles.js">文章</NavLink>
            </div>
        )
    }
}
export default ActivitiesNav;