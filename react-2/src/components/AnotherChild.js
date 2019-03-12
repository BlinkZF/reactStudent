import React from "react"
class AnotherChild extends React.Component{
    static defaultProps = {}
    static propsTypes = {}

    constructor(){
        console.log("3.constructor")
        super();
        this.state = {
            childCount:0,
            w:0
        }
    }
    // 必须有返回值
    // 第一次被挂载到父组件上就可以执行
    static getDerivedStateFromProps(props,state){ //当前属性的状态值,和属性值
        console.log("3.getDerivedStateFromProps")
        console.log(props,state)
        return { //这个返回值可以直接挂载到页面上  不建议使用 因为如果handlClike里面设置了的话，这里会将其覆盖掉
            // w:props.n
        }
    }
    render() {
        return( 
            <>
                <div>childCount:{this.state.childCount}</div>
                <button onClick = {this.handlClike}>增加childCount的值</button>
            </>
        )
    }
    // 已经被挂载
    componentDidMount(){
        console.log("3.componentDidMount")
    }
    // 询问是否更新
    shouldComponentUpdate(nextProps,nextState){
        console.log("3.shouldComponentUpdate")
        return true;
    }
    //render
    // 拿到更新前的状态并且返回出去
    // 必须有返回值 返回值给componentDidUpdate用
    // 所以这两个是成对出现的
    getSnapshotBeforeUpdate(){
        console.log("3.getSnapshotBeforeUpdate")
        return {
            a:10,
        }
    }
    componentDidUpdate(prevProps,prevState,snapShot){ //snapShot 是上面(getSnapshotBeforeUpdate)的返回值
        console.log("3.componentDidUpdate",snapShot)
    }
    componentWillUnmount(){
        console.log("3.componentWillUnmount")
    }
    handlClike = () =>{
        this.setState({
            childCount:this.state.childCount+1,
            w:100
        })
    }
}
export default AnotherChild