import { combineReducers } from 'redux'
import todoList from './todoList'
import counter from './counter'
// 将两个函数糅杂在一起，同时导出
export default combineReducers({
    todoList,
    counter
})