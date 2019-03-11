
import React,{ Fragment } from "react"
    // 注意这里和vue相似，外层要有一个闭合元素包裹
    // Fragment组件可以当做一个闭合标签，并且不会渲染到页面中去，类似于小程序中的<block></block>包装元素
    // <></> 这个也是一个闭合的标签，并且也不会渲染到页面上去
    // jsx语法中通过 {} 区分是js  <> 区分是 html  所以在jsx中可以直接在{}中写js语法
    // 数组可以直接渲染到页面中
    // 所以在react中写行间样式：style = { {backgroundColor：'red'} }
    // react中有些关键字是不合法的不能作为html元素的属性名\
    // react中渲染没有for 所有循环的时候我们在{}中直接循环数据,具体方法参考下面案例
    // 渲染的时候也要给被渲染的最外层加上key，确保渲染的准确性，注意这里的key不要使用index,
    // 使用index  可能会造成dom重新渲染 
  function TagList(props) {  //props  传递过来的参数
    return (
        <Fragment> 
          <div className="wrapper">
           <div className="search-title-box">
             <h5 className="search-title">搜索热点</h5>
             <span className="refresh">换一换</span>
           </div>
           <ul className="top-list-container">
             {
               props.list.map((item,index) => {
                 const indexStyle = {};
                 switch (index) {
                   case 0:
                     indexStyle.backgroundColor = '#f54545';
                     break;
                   case 1:
                     indexStyle.backgroundColor = '#ff8547';
                     break;
                   case 2:
                     indexStyle.backgroundColor = '#ffac38';
                     break;
                   default:
                     break;
                 }
                 return (
                   <li className="top-list" key = {item.id}> 
                     <div className="top-title">
                       <span className="hot-index" style = {indexStyle}>{index+1}</span>
                       <a className="topic-title">{item.title}</a>
                       {
                         item.new ? <span className="topic-new">新</span>:""
                       }
                     </div>
                     <div className="hot-degree">
                       <span>{item.hot}</span>
                     </div>
                   </li>
                 )
               })
             }
           </ul>
        </div>
  </Fragment>
    )
}
export default TagList