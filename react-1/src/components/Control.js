import React from 'react'

class Control extends React.Component{
    state = {
        taskA:'',
        taskb:'',
        list:[]
    }
    render(){
        return(
            <>
            <div>
                taskA:
                <input  type="text" name = "teskA" onChange = {this.handleChange} value = {this.state.task}/>
                <button name = "teskA"  onClick = { this.handleClick}>添加任务A</button>
            </div>
            <div>
                taskB:
                <input  type="text" name = "teskB" onChange = {this.handleChange} value = {this.state.task}/>
                <button name = "teskB" onClick = { this.handleClick}>添加任务B</button>
            </div>
            <ul>
                {
                    this.state.list.map( (item,index) => (
                        <li key = {item+index}>{item}</li>
                    ))
                }
            </ul>
            </>
        )
    }
 
handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
} 
handleClick = (e) =>{
    const type = e.target.name;
    
    let task = this.state[type];
    if(type === "taskA"){
        task = `任务A:${task}`
    }else if(type === "taskB"){
        task = `任务B:${task}`
    };
    console.log(type);
    this.setState({
        list:[...this.state.list,task],
        [type]:""
    })
} 
} 

export default Control