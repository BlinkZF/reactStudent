import React from 'react'
import './Home.css'

class Home extends React.Component{
    autherInput = React.createRef()
    articleInput = React.createRef()
    componentDidMount(){
      const {location} = this.props;
      const articleInfo = location.state && location.state.article;
      if(articleInfo){
        console.log(articleInfo)
        this.autherInput.current.value = articleInfo.auther;
        this.articleInput.current.value = articleInfo.title;
      }
    }
   render(){
       return(
        <div className="home">
        <h4>
          发表话题：
        </h4>
        <form onSubmit = { this.handleSubmit} >
        {/* onSubmit:form的提交事件 */}
          <div className="form-box">
            <label htmlFor="author">作者姓名：</label>
            <input id="author" required ref = {this.autherInput }></input>
          </div>
          <div className="form-box">
            <label htmlFor="article">文章标题：</label>
            <input id="article" required ref = {this.articleInput }></input>
            {/* required: h5属性 提示,不能是空白的 */}
          </div>
          <button className="confirm-btn">提交</button>
        </form>
        {/* 注意form表单默认事件：点击按钮跳转 */}
      </div>

        )
    }
    handleSubmit = (e)=>{
        e.preventDefault(); 
        //阻止默认事件发生  两种方法：return :false 在react中是不生效的
        const isLogin = document.cookie.includes("login=true")
        const auther = this.autherInput.current.value
        const title = this.articleInput.current.value
        const id =  Math.floor(Math.random() * 1000000000000000)
        const article = {
            auther,
            title,
            id
        }
        if(isLogin){
          this.setArticleStorage(article)
        }else{
          alert('去学习登录！！！')
          this.props.history.push({
            pathname:'/login',
            state:{
              article,
              from:this.props.location.pathname
            }
          })
        }
    }
    setArticleStorage = (article)=>{
        const articleList = JSON.parse(localStorage.getItem('articleList')) || [] 
        // 存储之前先查看缓存中是否有数据
        articleList.push(article);
        // 将数据放到缓存中
        localStorage.setItem("articleList", JSON.stringify(articleList))
        this.jumToTopics()
    }

    jumToTopics= () =>{
        this.props.history.push('./topics')
    }   
}
export default Home;