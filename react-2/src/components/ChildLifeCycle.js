import React from "react"

// 测试props更改 执行步骤
class ChildLifeCycle extends React.Component{
    render(){
        console.log("2.rander")
        return (
            <div>我是子组件</div>
        )
    }
    // 将要获得props  
    // 第一次被挂载的时候不执行,之后才执行
    componentWillReceiveProps(nextProps){ //接收一个参数nextprops
        // 进行状态的设置 
        // 发送ajax请求  but官方不建议在这使用ajax请求 
        // 16.3版本之后这个方法也被删除了
        this.setState({
            a:nextProps.n
        })
        console.log("2.WillReceiveProps")
    }
    // 是否更新 返回true/false
    shouldComponentUpdate(){
        console.log("2.ComponentUpdate")
        return true;
    }
    // 将要跟新
    componentWillUpdate(){
        console.log("2.WillUpdate")
    }
    // 渲染
    // 更新之后
    componentDidUpdate(){
        console.log("2.DidUpdata")
    }
    // 回到render
    // 当子组件被卸载的时候执行
    componentWillUnmount(){
        console.log("2.WillUnmount");
    }
}
export default ChildLifeCycle