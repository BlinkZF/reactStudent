import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
    render(){
        const { list,fn } = this.props;
        console.log(list);
        return(
            <>
                <ul>
                    {
                     list.map( (item,index) => 
                        <TodoItem key = {item + index} index = {index} item = {item} deleteTask = {fn}></TodoItem>
                     )
                    }
                </ul>
            </>
        )
    }
}
export default TodoList;