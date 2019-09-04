import React from 'react'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'
import Content from '../Content/content'

import './layout.css'

const layout = () => {
    return(
        <div>
            <Navbar/>
            <div className='layout'>
            <SideBar/>
            <Content/>
            </div>
        </div>
    )
}

export default layout