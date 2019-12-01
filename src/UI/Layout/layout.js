import React,{useState} from 'react'
import {Switch,Route} from 'react-router-dom'

import NavBarContainer from '../containers/navbar'
import ContentContainer  from '../containers/content'
import './layout.css'

const Layout = (props) => {
    const [navBar,toggleNavBar]=useState(false)
    return(
        <div className='container'>
            <div className='header-title'> 
                <div>FEED </div><div>MANIA</div>
                <div className='toggle-navbar' onClick={()=>toggleNavBar(!navBar)}> <i className='fas fa-bars'></i> </div>     
            </div>
            <NavBarContainer navBar={navBar}/> 
            <Switch>
                <Route exact path='/'>
                    <ContentContainer navBar={navBar}/>
                </Route>
                <Route path='/world'>
                    <ContentContainer feedType={'world'} navBar={navBar}/>
                </Route>
                <Route path='/sports'>
                    <ContentContainer feedType={'sports'} navBar={navBar}/>
                </Route>
                <Route path='/technology'>
                    <ContentContainer feedType={'technology'} navBar={navBar}/>
                </Route>
                <Route path='/business'>
                    <ContentContainer feedType={'business'} navBar={navBar}/>
                </Route>
                <Route path='/politics'>
                    <ContentContainer feedType={'politics'} navBar={navBar}/>
                </Route>
                <Route path='/gaming'>
                    <ContentContainer feedType={'gaming'} navBar={navBar}/>
                </Route>
                <Route path='/health'>
                    <ContentContainer feedType={'health'} navBar={navBar}/>
                </Route>
            </Switch>
           
        </div>
    )
}

export default Layout