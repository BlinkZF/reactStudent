import React,{Component} from 'react'
import { NavLink,Route,withRouter } from 'react-router-dom'
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
            <NavLink to = "/" exact>首页</NavLink>
            <NavLink to = "/activities">动态</NavLink>
            <NavLink to = "/topics">话题</NavLink>
            <NavLink to = "/login">登陆</NavLink>
        </div>
        )
    }
}
export default withRouter(Nav);

