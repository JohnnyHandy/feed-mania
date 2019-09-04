import React from 'react'
import {Nav, NavItem,UncontrolledCollapse} from 'reactstrap'

import {BBC,ESPN,FOX,NYTIMES,REUTERS,WALLSTREET,VOX,CNN,ABC,YAHOO} from '../../assets/logos/index'
import './sidebar.css'

const sidebar = () =>{
    return(
        <UncontrolledCollapse toggler="#toggler" style={{width:'150px'}}>
            <Nav className='sidebar' vertical>
            <NavItem><BBC/></NavItem>
            <NavItem><ESPN/></NavItem>
            <NavItem style={{height:'80px'}}><FOX/></NavItem>
            <NavItem><NYTIMES/></NavItem>
            <NavItem><REUTERS/></NavItem>
            <NavItem><WALLSTREET/></NavItem>
            <NavItem><VOX/></NavItem>
            <NavItem><CNN/></NavItem>
            <NavItem><ABC/></NavItem>
            <NavItem><YAHOO/></NavItem>

        </Nav>
        </UncontrolledCollapse>
        
    )
}

export default sidebar