import React from 'react';
import {render} from 'react-dom';
import  { Provider } from 'react-redux'
import store from './store' 
import ToDoList from './components/ToDoList'
import Counter from './components/Count'


// 在上面引入store,然后在行间配置
render(
<Provider store = {store}>
    <ToDoList/>
    <Counter/>
</Provider>, 
window.root);
