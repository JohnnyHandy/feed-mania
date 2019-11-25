import React from 'react'
import {Route,useParams,Switch} from 'react-router-dom'

import MainContainer from '../containers/main'

import './layout.css'

const Layout = (props) => {

    let { slug } = useParams()
    console.log(slug)
    return(
        <div className='container'>
            <div className='header-title'> 
                <div>FEED </div><div>MANIA</div>
            </div>
            <Switch>
                <Route exact path='/'>
                    <MainContainer active='initial'/>
                </Route>
                <Route path='/world'>
                    <MainContainer active='world'/>
                </Route>
                <Route path='/sports'>
                    <MainContainer active='sports'/>
                </Route>
                <Route path='/technology'>
                    <MainContainer active='technology'/>
                </Route>
                <Route path='/business'>
                    <MainContainer active='business'/>
                </Route>
                <Route path='/politics'>
                    <MainContainer active='politics'/>
                </Route>
                <Route path='/gaming'>
                    <MainContainer active='gaming'/>
                </Route>
                <Route path='/health'>
                    <MainContainer active='health'/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default Layout