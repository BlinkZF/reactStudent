import React,{Component} from 'react'
import store from '../store'
import { getCountAdd } from '../store/actions/counter'

class item extends  React.Component{
    state = store.getState().counter
    componentDidMount(){
        store.subscribe(()=>{ //订阅
            this.setState(store.getState().counter)
            // getState().counter返回的数据完全是Count组件所用到的数据，所以可以直接放在this.setState中
        }) //监听
    }
   render(){
       return(
            <div>
                {this.state.count}
                <button onClick = {this.handleClike}>Add</button>
            </div>
        )
    }
    handleClike = () =>{
        const action =  getCountAdd(3)
        store.dispatch(action)
    }
}
export default item;