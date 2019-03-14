import React from 'react';
import { render } from 'react-dom';
import {    BrowserRouter as Router,
            Route,
            Switch,//匹配到一个之后就不会向下匹配了
            Redirect,//重定向
        //     Link,
        //     NavLink,//选中之后增加一个class
        } from 'react-router-dom';
import Home from './components/router/page/Home/Home'
import Login from './components/router/page/Login/Login'
import Topics from './components/router/page/Topics/Topics'
import Activities from './components/router/page/Activities/Activities'
import Article from './components/router/activities/articles/Articles'
import App from './components/router/App'
import PrivateRoute from './components/router/component/PrivateRoute'
import NoMatch from './components/router/page/noMatch/NoMatch'
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
            <Route path = "/error.html" component = {NoMatch}></Route> 
            {/* <Route></Route> 这个组件如果写在switch里面，没有设置path属性的话就会认为这个route匹配的是除了上面
               匹配过的路径以外的任何路径 */}
            <Redirect to="/error.html"></Redirect> 
            {/* 重定向,当所有的都没匹配到的时候重定向到to页面 */}
            </Switch>
            </App>
        </Router>
,document.getElementById('root'))