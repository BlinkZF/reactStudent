import React,{Component} from 'react'
import { Route,Switch,Redirect} from "react-router-dom"
import ActivitiesNav from '../../component/ActivitiesNav/ActivitiesNav'
import Recommended from '../../activities/recommended/Recommended'
import All from '../../activities/all/All'
import Articles from '../../activities/articles/Articles'
import Pins from '../../activities/pins/Pins'
import './Activities.css'

class Activities extends  React.Component{
   render(){
       return(
            <div className = "activities">
                <ActivitiesNav></ActivitiesNav>
                <div className ="content">
                <Switch>
                    <Route path='/activities/recommended' component = { Recommended }></Route>
                    <Route path='/activities/pins' component = { Pins }></Route>
                    <Route path='/activities/articles' component = { Articles }></Route>
                    <Route path='/activities/all' component = { All }></Route>
                    <Redirect to= '/activities/recommended' ></Redirect>
                </Switch>
                </div>
            </div>
        )
    }
}
export default Activities;