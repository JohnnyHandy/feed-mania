import React from 'react'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'
import Content from '../Content/content'

import './layout.css'

const layout = (props) => {
    return(
        <div className='container'>
            <div className='header-title'> 
                <div>FEED </div><div>MANIA</div>
            </div>
            <div className='main-navbar'>
                <div className='main-item'>World</div>
                <div className='main-item'>Sports</div>
                <div className='main-item'>Technology</div>
                <div className='main-item'>Business</div>
                <div className='main-item'>Politics</div>
                <div className='main-item'>Gaming</div>
                <div className='main-item'>Health</div>
            </div>
            {/* <Navbar/>
            <div className='layout'>
            <SideBar changeFeed = {props.changeFeed}/>
            <Content contentData = {props.contentData}/>
            </div> */}
        </div>
    )
}

export default layout