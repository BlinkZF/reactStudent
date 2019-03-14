import React from 'react'
import { NavLink,withRouter } from 'react-router-dom'

import MenuLink from '../MenuLink'

import './style.css'

// 高阶最贱，对nav组件进行包装 ，封装成一个函数 两个return嵌套
// withRouter方法底层实现:
// const withRouter = (Component) =>() => {return <Route component = { Component }></Route>}

class Nav extends  React.Component{
   render(){
       return(
        <div className = "nav">
            {/* 这里render到页面上成为a标签,不能像vue中那样转换 */}
            <span className ="logo">完美世界</span>
            <MenuLink to = "/" exact>首页</MenuLink>
            <MenuLink to = "/activities">动态</MenuLink>
            <MenuLink to = "/topics">话题</MenuLink>
            <MenuLink to = "/login">登陆</MenuLink>
        </div>
        )
    }
}
export default withRouter(Nav);

