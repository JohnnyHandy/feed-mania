import React from 'react'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'
import Content from '../Content/content'

import './layout.css'

const layout = (props) => {
    return(
        <div>
            <Navbar/>
            <div className='layout'>
            <SideBar changeFeed = {props.changeFeed}/>
            <Content contentData = {props.contentData}/>
            </div>
        </div>
    )
}

export default layout