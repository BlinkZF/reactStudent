import React,{Component} from 'react'
// import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
// import * as Action from '../store/actions/todoList' //* as 接收的是一个对象
import * as action from '../store/actions/todoList' //* as 接收的是一个对象
class ToDoList extends React.Component{
   render(){
       const { inpVal,list }  = this.props;  
    return(
        <>
             <div>
                <input value = {inpVal} onChange = {this.handleChange} ></input>
                <button onClick = {this.handleAdd}>添加</button>
            </div>
            <ul>
                {
                    
                list.map((item,index) => (
                    <li key = {item + index}>{item}
                    <button onClick = {()=>{this.handleDelete(index)}}>X</button>
                    </li>
                ))
                }
            </ul> 
        </>
    )
}
    handleChange =(e)=>{
        this.props.changeVal(e.target.val)
    }

    handleAdd = (e)=>{
        this.props.addItem(this.props.inpVal)
        
    }
    handleDelete =(index)=>{
        this.props.deleteItem(index)
    }
}
const mapStateToProps =(state)=>({
    inpVal:state.todoList.inpVal,
    list:state.todoList.list
})
export default connect(mapStateToProps,action)(ToDoList); 

