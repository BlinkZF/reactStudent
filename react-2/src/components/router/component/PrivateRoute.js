import React from 'react';
import {Route,Redirect} from 'react-router-dom'
// 登录校验，能否查页面
const PrivateRoute =({component:Component,...props})=> {
    return(
        <Route {...props} render={(p)=>{
            const isLogin = document.cookie.includes('login=true');
            if(isLogin){
                return <Component></Component>
            }else{
                alert('滚去学习的登录校验！！！')
                return <Redirect to = {{
                    pathname:'/login',
                    state:{
                        from:p.location.pathname
                    }
                }}></Redirect> //，没有登录的情况下 直接跳到login页面
            }
        }}></Route>
    )
}
export default PrivateRoute