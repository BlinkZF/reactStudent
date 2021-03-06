import React from "react"
import { render }  from "react-dom"
import "./index.css"
// import TagList from "./components/TagList"
// import TodoList from "./components/TodoList"
// import Control from "./components/Control"
// import UnControl from "./components/UnControl"
// import Person from "./components/Person"
import TodoWrapper from "./components/Wrapper/TodoWrapper"
const topList = [
  {
    id: 0,
    title: '老年人才用9键',
    new: true,
    hot: '46万'
  },
  {
    id: 1,
    title: '人贩子张维平死刑',
    new: true,
    hot: '44万'
  },
  {
    id: 2,
    title: '全国冻哭预警地图',
    new: false,
    hot: '35万'
  },
  {
    id: 3,
    title: '沈梦辰晒婚纱照',
    new: false,
    hot: '33万'
  },
  {
    id: 4,
    title: '恋爱4个月胖50近',
    new: true,
    hot: '32万'
  },
  {
    id: 5,
    title: '郭麒麟初中早恋',
    new: false,
    hot: '25万'
  },
  {
    id: 6,
    title: '男孩滑雪遭遇雪崩',
    new: true,
    hot: '24万'
  },
  {
    id: 7,
    title: '大熊猫玩菜刀',
    new: false,
    hot: '24万'
  },
  {
    id: 8,
    title: '姿态宣布退役',
    new: false,
    hot: '22万'
  },
  {
    id: 9,
    title: '卫龙辣条吃出虫子',
    new: false,
    hot: '20万'
  },
  {
    id: 10,
    title: '女生被罚抱头蹲',
    new: true,
    hot: '20万'
  }
]
  
const person = {
  name: '杉杉',
  age: 18,
  sex: '女',
  figure: {
    weight: 95,
    height: 165
  },
  hobby: ['读书', '看报'],
  salary: 10
}
// render(<TagList list = {topList}></TagList>,document.getElementById('root'))
render(<TodoWrapper></TodoWrapper>,document.getElementById('root'))

