import React from 'react'
import {BBC,ESPN,FOX,NYTIMES,REUTERS,WALLSTREET,VOX,CNN,ABC,YAHOO} from '../../assets/logos/index'


import './layout.css'

const layout = (props) => {
    return(
        <div className='container'>
            <div className='header-title'> 
                <div>FEED </div><div>MANIA</div>
            </div>
            <div className='main-navbar'>
                <div className='main-item'>
                    <i className="fas fa-globe item-icon"></i>
                    World
                    <i className="fas fa-globe item-icon"></i>
                </div>
                <div className='choice-container'>
                    <ABC/>
                    <BBC/>
                    <CNN/>
                    <ESPN/>
                    <FOX/>
                    <NYTIMES/>
                    <REUTERS/>
                    <VOX/>
                    <WALLSTREET/>
                    <YAHOO/>
                </div>
                {/* <div className='main-item'>
                    <i className="fas fa-football-ball item-icon"></i> 
                    Sports
                    <i className="fas fa-football-ball item-icon"></i> 
                </div>
                <div className='main-item'>
                    <i className="fas fa-robot item-icon"></i>
                    Technology
                    <i className="fas fa-robot item-icon"></i>
                </div>
                <div className='main-item'>
                    <i className="fas fa-comment-dollar item-icon"></i>
                    Business
                    <i className="fas fa-comment-dollar item-icon"></i>
                </div>
                <div className='main-item'>
                    <i className="fas fa-bullhorn item-icon"></i>
                    Politics
                    <i className="fas fa-bullhorn item-icon"></i>
                </div>
                <div className='main-item'>
                    <i className="fas fa-gamepad item-icon"></i>
                    Gaming
                    <i className="fas fa-gamepad item-icon"></i>
                </div>
                <div className='main-item'>
                    <i className="fas fa-heartbeat item-icon"></i>
                    Health
                    <i className="fas fa-heartbeat item-icon"></i>
                </div> */}
            </div>
        </div>
    )
}

export default layout