import React from 'react'
import {Nav, NavItem,UncontrolledCollapse} from 'reactstrap'


import * as feedKeys from '../../utility/stringKeys'
import {BBC,ESPN,FOX,NYTIMES,REUTERS,WALLSTREET,VOX,CNN,ABC,YAHOO} from '../../assets/logos/index'
import './sidebar.css'

const sidebar = (props) =>{
    return(
        <UncontrolledCollapse toggler="#toggler" style={{width:'100px'}}>
            <Nav className='sidebar'>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.BBC_NEWS)}><BBC/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.ESPN)}><ESPN/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.FOX_NEWS)}><FOX/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.NY_TIMES)}><NYTIMES/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.REUTERS)}><REUTERS/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.WALL_STREET)}><WALLSTREET/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.VOX)}><VOX/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.CNN)}><CNN/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.ABC)}><ABC/></NavItem>
            <NavItem className='navitems' onClick = {()=>props.changeFeed(feedKeys.YAHOO_NEWS)}><YAHOO/></NavItem>
            </Nav>
        </UncontrolledCollapse>
        
    )
}

export default sidebar