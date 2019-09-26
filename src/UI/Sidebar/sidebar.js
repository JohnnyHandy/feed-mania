import React from 'react'
import {Nav, NavItem,UncontrolledCollapse} from 'reactstrap'


import * as feedKeys from '../../utility/stringKeys'
import {BBC,ESPN,FOX,NYTIMES,REUTERS,WALLSTREET,VOX,CNN,ABC,YAHOO} from '../../assets/logos/index'
import './sidebar.css'

const sidebar = (props) =>{
    return(
        <div style={{width:'150px'}}>
          <Nav className='sidebar'>
          <NavItem className='navitems'> <i className="fas fa-globe" style={{float:'left',marginTop:'4px'}}></i> World</NavItem>
          <NavItem className='navitems'> <i className="fas fa-football-ball" style={{float:'left',marginTop:'4px'}}></i> Sports</NavItem>
          <NavItem className='navitems'> <i className="fas fa-robot" style={{float:'left',marginTop:'4px'}}></i> Technology</NavItem>
          <NavItem className='navitems'> <i className="fas fa-comment-dollar" style={{float:'left',marginTop:'4px'}}></i> Business</NavItem>
          <NavItem className='navitems'> <i className="fas fa-bullhorn" style={{float:'left',marginTop:'4px'}}></i> Politics</NavItem>
          <NavItem className='navitems'> <i className="fas fa-gamepad" style={{float:'left',marginTop:'4px'}}></i> Gaming</NavItem>
          <NavItem className='navitems'> <i className="fas fa-heartbeat" style={{float:'left',marginTop:'4px'}}></i> Health</NavItem>
             {/**<NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.BBC_NEWS)}><BBC/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.ESPN)}><ESPN/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.FOX_NEWS)}><FOX/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.NY_TIMES)}><NYTIMES/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.REUTERS)}><REUTERS/></NavItem>
            <NavItem className= 'navitems' onClick = {()=>props.changeFeed(feedKeys.WALL_STREET)}><WALLSTREET/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.VOX)}><VOX/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.CNN)}><CNN/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.ABC)}><ABC/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.YAHOO_NEWS)}><YAHOO/></NavItem>
            **/}
            </Nav>
        </div>
        
    )
}

export default sidebar