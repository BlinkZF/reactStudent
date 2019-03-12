import React from 'react';
import {Consumer} from './context';
class TodoItem extends React.Component{
    render(){
        const {item,index} = this.props;
        return(
            <Consumer>
                { //接收值
                    ({deleteTask}) =>
                    <li>{item}
                        {/* <button onClick = {() => {this.handlClick(index)}}>X</button> */}
                        {/* 当需要传递参数的时候，这里要写成匿名函数自执行 */}
                        <button onClick = {() => {deleteTask(index)}}>X</button> 
                        {/* 在这里直接执行函数就行 */}
                        
                    </li>
                }
            </Consumer>
        )
    }
    handlClick = (index) =>{
        this.props.deleteTask(index)
    }
}
export default TodoItem;