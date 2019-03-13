import React, { Component } from 'react';
import './style.css'

// 函数组件(视图组件，只render的情况下，函数组件性能好一点)
const Articles = ( { match,location}) =>{
  return (
        <div className="article">
          <div>
            文章ID：
            <span>{match.params.id}</span>
          </div>
          <div>
            文章作者：
            <span>{location.state.auther}</span>
          </div>
          <div>
            文章标题：
            <span>{location.state.title}</span>
            </div>
         </div>
  )
}
export default Articles;