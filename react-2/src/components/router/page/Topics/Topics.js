import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import './Topics.css'

class Topics extends  React.Component{
    state = {
        articleList:JSON.parse(localStorage.getItem("articleList")) || []
    }
   render(){
       return(
            <>
                <ul className="topics">
                    {
                        this.state.articleList.reverse().map((item,index) =>(
                            <li key = {item.id} className="topics-box">
                                <span>{item.auther}</span>
                                <Link to = {{
                                    pathname:`/article/${item.id}`,
                                    state:{
                                        auther:item.auther,
                                        title:item.title
                                    }
                                }}>{item.title}</Link>
                            </li>
                         ))
                    }
                </ul>
            </>
        )
    }
}
export default Topics;