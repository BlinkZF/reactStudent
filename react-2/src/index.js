import React from 'react';
import { render } from 'react-dom';
import {    BrowserRouter as Router,
            Route,
            Switch,//匹配到一个之后就不会向下匹配了
            Redirect,//重定向
            Link,
            NavLink,//选中之后增加一个class
        } from 'react-router-dom';
import Home from './components/router/page/Home/Home'
import Login from './components/router/page/Login/Login'
import Topics from './components/router/page/Topics/Topics'
import Activities from './components/router/page/Activities/Activities'
import Article from './components/router/activities/articles/Articles'
import App from './components/router/App'
import PrivateRoute from './components/router/component/PrivateRoute'
import './components/router/style/index.css'


render( <Router>
            <App>
            <Switch>
            {/* 组件匹配是逐步向下的 */}
            <Route path = "/" exact component = {Home}></Route> 
            {/* exact = {true} 完全匹配 */}
            <Route path = "/activities" component = {Activities}></Route>
            {/* <Route path = "/topics" component = {Topics}></Route> */}
            <PrivateRoute path = "/topics" component = {Topics}></PrivateRoute>
            <Route path = "/login" component = {Login}></Route>
            <Route path = "/article/:id" component = { Article }></Route>
            {/* 动态路由 */}
            <Redirect to="/"></Redirect>
            </Switch>
            </App>
        </Router>
,document.getElementById('root'))