import React,{Component} from 'react'
// import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import * as actions from  '../store/actions/counter'

class Count extends  React.Component{
   render(){
       return(
            <div>
                {this.props.count}
                <button onClick = {this.handleClike}>Add</button>
            </div>
        )
    }
    handleClike = () =>{
        this.props.getCountAdd(6) 
    }
}

const  mapStateToProps = (state) => state.counter //当state中只有counter这个数据的时候，才能用这个  不然还是用下面那个

export default connect(mapStateToProps, actions)(Count); 
// redux提供的函数：bindActionCreators 绑定动作创建者。利用这个函数得到一个返回值，这个返回值就是mapDispatchToProps的一个值