import React from 'react';
import { render } from 'react-dom';
import {    BrowserRouter as Router,
            Route,
            Switch,//匹配到一个之后就不会向下匹配了
            Redirect,//重定向
            Link,
            NavLink,//选中之后增加一个class
        } from 'react-router-dom';
import Home from './components/router/page/Home'
import Login from './components/router/page/Login'
import Topics from './components/router/page/Topics'
import Activities from './components/router/page/Activities'
import "./components/router/style/index.css"
import "./components/router/style/reset.css"

render( <Router>
            <>
            <div className = "nav">
                {/* 这里render到页面上成为a标签,不能像vue中那样转换 */}
                <NavLink to = "/" exact>首页</NavLink>
                <NavLink to = "/activities">动态</NavLink>
                <NavLink to = "/topics">话题</NavLink>
                <NavLink to = "/login">登陆</NavLink>
            </div>
            <div className = "content">
            <Switch>
            {/* 组件匹配是逐步向下的 */}
            <Route path = "/" exact component = {Home}></Route> 
            {/* exact = {true} 完全匹配 */}
            <Route path = "/activities" component = {Activities}></Route>
            <Route path = "/topics" component = {Topics}></Route>
            <Route path = "/login" component = {Login}></Route>
            <Redirect to="/"></Redirect>
            </Switch>
            </div>
            </>
        </Router>
,document.getElementById('root'))