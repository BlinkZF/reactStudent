import React from 'react';
import TodoList from './TodoList'
import { Provider } from './context'
class TodoWrapper extends React.Component{
    task = React.createRef() 
    // 注意使用createRef()这种方式，他的dom元素是tast.current.value !!!
    state = {
        list:[]
    }
    render(){
        return(
            <Provider value = {{deleteTask:this.deleteTask}}> 
            {/* 在这使用Provider组件 里面传递value value的值就是传递的参数*/}
            <div>
                <input type = "text" ref = { this.task} />
                <button onClick = {this.handleClike}>添加</button>
            </div>
            <TodoList list= {this.state.list} fn = { this.deleteTask }></TodoList>
            </Provider>
        )
    }
    handleClike = () =>{
        this.setState({
            list:[...this.state.list,this.task.current.value]
        })
        this.task.current.value = "";
    }
    deleteTask = (index)=>{
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}
export default TodoWrapper;