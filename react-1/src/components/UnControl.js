// 非受控组件
import React from 'react'

class UnControl extends React.Component{
    teskA = React.createRef();//16.3版本之后才能使用
    teskB = React.createRef();
    state = {
        list:[]
    }
    render(){
        return(
            <>
            <div>
                taskA:
                {/* <input  type="text" ref = {(dom)=>{this.teskA = dom}} /> */}
                <input  type="text" ref = {this.teskA} />
                <button name = "teskA"  onClick = { this.handleClick}>添加任务A</button>
            </div>
            <div>
                taskB:
                <input  type="text" ref = {this.teskB} />
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
 
handleClick = (e) =>{
    console.log(this.teskA)
    console.log(this.teskA.current.value)
    // const type = e.target.name;
    // let tesk = this[type].value;
    // if(type === "taskA"){
    //     tesk = `任务A:${tesk}`
    // }else if(type === "taskB"){
    //     tesk = `任务B:${tesk}`
    // };
    // this[type].value = "";
    // this.setState({
    //     list:[...this.state.list,tesk],
    // })
} 
} 

export default UnControl