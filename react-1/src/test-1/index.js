// 引入的名称必须是React
// import React from 'react';
// import ReactDOM from 'react-dom'; //这种引入方式 ReactDOM这个名称可以修改，只要和这里填的统一就行
// import {render} from 'react-dom'; //这种引入，不能修改引入名称 必须是render

// 直接写在js中的标签元素称之为jsx语法。必须要借助react渲染 js + xml(html) 的组合
// let div = <div>开始学习react<span>好好学习天天向上</span></div> 

//jsx渲染流程 -> React.createElement(type,props,childen...(后面的参数都是子元素)) 
//-> vNode 对象(描述当前元素) ->渲染到页面上


//这里的内部会进行转化，React.createElement(type,props,childen...(后面的参数都是子元素)) 
//React.createElement(div,{id:'demo'},'开始学习react',React.createElement(span,{id:''},'好好学习天天向上'))

//render(渲染的元素，容器) 
// render(div, document.getElementById('root'));
// ReactDOM.render(div, document.getElementById('root'));

//jsx渲染流程  代码展示
const React = {
    createElement(type, props, ...children) {
        return {
            type,//标签类型
            props,//标签属性
            children//标签内的内容
        }
    }
}
let div = <div id = "demo">开始学习react<span class = "span">好好学习天天向上</span></div> 
const render = (vNode,container) =>{
    if(typeof vNode === "string"){
        const text = document.createTextNode(vNode);//创建一个文本节点
        return container.appendChild(text);//插入文本
    }
    const {type,props,children} = vNode;//解构赋值
    const ele = document.createElement(type);//创建一个html元素
    for(let key in props){
        if(key.startsWith("__")){
            break
        }
        ele.setAttribute(key,props[key]);//设置属性
    }
    //递归调用
    children.forEach(item => {
        render(item,ele);
    })
    container.appendChild(ele);//插入标签
}
// 标签集合  父级元素 
render(div,window.root)

