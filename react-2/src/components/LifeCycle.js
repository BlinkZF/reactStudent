import React from 'react'
// import ChildLifeCycle from './ChildLifeCycle'
import AnotherChild from './AnotherChild'

class LifeCycle extends React.Component{
    // 1:先看有有没有默认属性与属性校验
    static defaultProps = {}
    static propsTypes = {}
    // 2:定义状态
    constructor(){
        // 构造函数可以定义状态
        // 请求ajax，拿回来的数据放到状态上
        console.log('1.constructor')
        super();
        this.state = {
            count:0
        }
    }
    // 3:将要被挂载  
    componentWillMount(){
        // 在这个函数中可以进行一个ajax请求 (官方不建议)  用高端一点的技术可能会发生冲突
        //  16.3版本之后没有这个声明周期函数
        console.log('1.willMount')
    }
    // 4：渲染
    render(){
        // 只用来渲染 这个里面不能使用this.setState 在这个里面改变状态，会造成循环执行render函数，会造成内存(栈)溢出
        console.log("1.render")
        return(
            <>
            <div>
                count:{this.state.count}
                <button onClick = {this.handlClike}>增加count的值</button>
                
            </div>
            {
                 <AnotherChild n = {this.state.count}></AnotherChild>
            }
            
            </>
        )
    }
    // 5：已经被挂载
    componentDidMount(){
        // 进行ajax请求，改变状态 this.setState  (f发送ajax请求最佳位置) 
        console.log("1.DidMount")
    }
    // 状态更改之后需要询问一下 返回true/false  
    // 如果返回false 只执行shouldComponentUpdate  但是里面的状态会改变只是不会渲染在页面上
    shouldComponentUpdate(nextProps,nextState){ //两个参数，将要改变属性的值，将要改变状态的值
        // 判断当前状态和将要改变的状态的值是否一样，以此来判断返回值 优化性能
        console.log("1.shouldComponentUpdate")
        // return !nextState.count === this.state.count;
        return true;
    }
    // 回答true之后代表将要更新
    componentWillUpdate(){
        // 不能设置状态  不能进行ajax请求  基本不使用这个函数
        console.log("1.componentWillUpdate")
    }
    // 更新完成之后 render
    // 执行下面  告诉组件更新完成
    componentDidUpdate(){
        // 不能设置状态 不能进行ajax请求  基本不使用这个函数
        console.log("1.componentDidUpdate")
    }
    // 回到render
    handlClike = () => {
        this.setState({
            count :this.state.count + 1
        })
    }
}
export default LifeCycle