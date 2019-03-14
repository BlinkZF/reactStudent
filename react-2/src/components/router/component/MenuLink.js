import React from 'react'
import { Route } from 'react-router-dom'

// Route中有两种方式渲染，Component  render
// Component 只渲染一个组件 并且路径要匹配
// 使用render渲染，只有当路径匹配的时候，才会进行渲染
// children 无论路径是什么样的 都渲染
const MenuLink = ({to, ...props}) =>{
    return(
                        // 严格匹配
        <Route path = {to} {...props} children = {(p)=>{
            return( 
            <span onClick = {()=>{p.history.push(to)}}
                className = {p.match?'active':""}    >
            { props.children}
            </span>
            )
        }}></Route>
    )
}
export default MenuLink