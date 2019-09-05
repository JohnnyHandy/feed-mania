import React from 'react'
import {Nav, NavItem,UncontrolledCollapse} from 'reactstrap'

import {BBC,ESPN,FOX,NYTIMES,REUTERS,WALLSTREET,VOX,CNN,ABC,YAHOO} from '../../assets/logos/index'
import './sidebar.css'

const sidebar = () =>{
    return(
        <UncontrolledCollapse toggler="#toggler" style={{width:'100px'}}>
            <Nav className='sidebar'>
            <NavItem className='navitems'><BBC/></NavItem>
            <NavItem className='navitems'><ESPN/></NavItem>
            <NavItem className='navitems'><FOX/></NavItem>
            <NavItem className='navitems'><NYTIMES/></NavItem>
            <NavItem className='navitems'><REUTERS/></NavItem>
            <NavItem className='navitems'><WALLSTREET/></NavItem>
            <NavItem className='navitems'><VOX/></NavItem>
            <NavItem className='navitems'><CNN/></NavItem>
            <NavItem className='navitems'><ABC/></NavItem>
            <NavItem className='navitems'><YAHOO/></NavItem>
            </Nav>
        </UncontrolledCollapse>
        
    )
}

export default sidebar