import React from "react"
class TodoList extends React.Component{
    //数据称之为数据
    //这里的constructor不写的话 会自动添加
    state = {
        inpVal:"", 
        list:[1,2,3,4],
        count:0
    }
    render(){
        return(
            <>
                <div>
                    <input type = "text" onChange = { this.handleChange}></input>
                    <button onClick = {this.handleClike}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) =>(
                            <li key = {item}>{item}
                            <button onClick ={()=>{this.handleDelete(index)}}>X</button>
                            {/* 注意这里是匿名函数,如果没有匿名函数的话，他就会自己执行 外面套一个匿名函数，匿名函数执行后里面的函数执行 */}
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <span>{this.state.count}</span>
                    <button onClick = {this.handleAdd}>增加</button>
                </div>
            </>
        )
    }
    //注意在react内部写函数的时候一定使用箭头函数，解决this问题
    handleChange = e => {
       this.setState({
           inpVal:e.target.value
       })
    }
    handleClike = () => {
        this.setState({
            list:[...this.state.list,this.state.inpVal],
            inpVal:""
        })
    }
    handleDelete = index =>{
        const list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    handleAdd = () =>{
        // 改变状态的时候，最好是使用传入函数的方式，这里要注意的是es6语法
        this.setState((prevState)=>{
            return {
                count:prevState.count +1
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count +2
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count +7
            }
        })
    }
} 
export default TodoList