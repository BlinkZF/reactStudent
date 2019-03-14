import React from 'react'
import './Login.css'

class Login extends  React.Component{
    state = {
        isLogin:document.cookie.includes('login=true')
    }
   render(){
       return(
            <div className = "login">
                <button className = "login-btn" onClick = {this.handleClick}>
                    {this.state.isLogin ? '退出':"登陆"}
                </button>
            </div>
        )
    }
    handleClick = () =>{
        const isLogin = this.state.isLogin
        if(isLogin){
            this.setCookie('login',"",-1);
        }else{
            this.setCookie('login',true,300);
            this.jumpBack()
        }
        this.setState({
            isLogin:!isLogin
        })
    } 
    // 设置cookie
    // 删除cookie:让cookie中expires的事件是当前的一个时间
    setCookie = (key,value,day) =>{
        const expires = day*24*60*60*1000;
        const date = new Date(+new Date() + expires);
        // 将时间解析为标准格式
        document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
        // toUTCString() 方法可根据世界时 (UTC) 把 Date 对象转换为字符串，并返回结果。
    }
    
    jumpBack = () =>{
        const { location,history} = this.props;
        const  from = location.state && location.state.from;
        if(from){
            alert('回到上一级页面！！');
        }
        if(from === '/'){
            history.push({ //将值传递回去
                pathname:from,
                state:{
                    article:location.state.article
                }
            })
        }else if(from ==='/topics'){
            history.push(from);
        }
    }
}
export default Login;