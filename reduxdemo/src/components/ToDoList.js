import React,{Component} from 'react'
import store from '../store';//这里注意导入index.js文件 写到文件名就可以了
import * as Action from '../store//actions/todoList' //* as 接收的是一个对象
class c extends React.Component{
    
    state = store.getState().todoList

    // store.getState() 返回的是一个对象，对象中存的就是状态值
    componentDidMount(){
        store.subscribe(()=>{
            this.setState(store.getState().todoList)
            // this.handleStoreChange,
        }) //监听每次修改的情况
    }
   render(){
    return(
        <>
             <div>
                <input value = {this.state.inpVal} onChange = {this.handleChange} ></input>
                <button onClick = {this.handleAdd}>添加</button>
            </div>
            <ul>
                {
                    
                this.state.list.map((item,index) => (
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
        // const action = {type:Types.CHANGE_INPUT_VAL,value:e.target.value}
        const action = Action.getTodoChangeInputValueAction(e.target.value)
        store.dispatch(action)
    }

    handleAdd = ()=>{
        // const action = {
        //     type:Types.ADD_TODO_ITEM,
        //     value:this.state.inpVal
        // }
        const action = Action.getTodoAddItemAction(this.state.inpVal)
        store.dispatch(action)//执行这一步之后,将值发给reducer
    }
    handleDelete =(index)=>{
        // const action = {
        //     type:Types.DELETE_TODO_ITEM,
        //     index
        // }
        const action = Action.getTodoDeleteItemAction(index);
        store.dispatch(action)
    }

    // 改变数据重新渲染
    // handleStoreChange = () =>{ 
        // 将这个里面的执行的语句放到订阅中
    // }
}
export default c;
// 总结：
    // 为什么删除函数不使用订阅模式
    // 个人观点:有存储的东西，可以使用setState来进行渲染