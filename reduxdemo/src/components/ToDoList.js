import React,{Component} from 'react'
import store from '../store';//这里注意导入index.js文件 写到文件名就可以了
class c extends React.Component{
    state = store.getState()
    componentDidMount(){
        store.subscribe(this.handleStoreChange) //监听
    }
    // store.getState() 返回的是一个对象，对象中存的就是状态值
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
        const action = {type:'CHANGE_INPUT_VAL',value:e.target.value}
        store.dispatch(action)
    }

    handleAdd = ()=>{
        const action = {
            type:"ADD_TODO_ITEM",
            value:this.state.inpVal
        }
        store.dispatch(action)//执行这一步之后,将值发给reducer
    }
    handleDelete =(index)=>{
        const action = {
            type:"DELETE_TODO_LIST",
            index
        }
        store.dispatch(action)
        console.log(action)
    }

    // 改变数据重新渲染
    handleStoreChange = () =>{
        this.setState(store.getState())
    }
}
export default c;