import React from 'react'
import Nav from './component/nav/nav'

import "./style/app.css"


class App extends  React.Component{
   render(){
       return(
           <div className = "App">
                <Nav></Nav>
                {/* 当Route中不写的情况下，默认去的是根路径 */}
                {/* 高阶组件:由组件返回一个组件*/}
                {/* <Route component = { Nav }></Route> */}
                <div className = "content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}
export default App;