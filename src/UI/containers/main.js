import React from 'react'
import {NavLink,useParams} from 'react-router-dom'
import ChoiceContainer from '../containers/choice'

const Main = (props)=>{  
return <div className='main-navbar' > 
    {(props.active ==='initial'||props.active ==='world') ? 
    <div className={'main-item-container'}>
        <NavLink className='main-item' to='/world'>
        <i className="fas fa-globe item-icon"></i>
        World
        <i className="fas fa-globe item-icon"></i>
        </NavLink>
    </div> :
    null}      
    {(props.active === 'initial'||props.active ==='sports') ? 
    <div className='main-item-container'>
        <NavLink className='main-item' to='/sports'>
            <i className="fas fa-football-ball item-icon"></i> 
            Sports
            <i className="fas fa-football-ball item-icon"></i> 
        </NavLink>
    </div> :
    null}
    {(props.active === 'initial'||props.active ==='technology' ) ? 
    <div className='main-item-container'>
        <NavLink className='main-item' to='/technology'>
            <i className="fas fa-robot item-icon"></i>
            Technology
            <i className="fas fa-robot item-icon"></i>
        </NavLink>
    </div> :
    null}
    {(props.active === 'initial'||props.active ==='business' ) ? 
    <div className='main-item-container'>
        <NavLink className='main-item' to='/business'>
            <i className="fas fa-comment-dollar item-icon"></i>
            Business
            <i className="fas fa-comment-dollar item-icon"></i>
        </NavLink>
    </div>:
    null}
    {(props.active === 'initial'||props.active ==='politics' ) ?
    <div className='main-item-container'>
        <NavLink className='main-item' to='/politics'>
            <i className="fas fa-bullhorn item-icon"></i>
            Politics
            <i className="fas fa-bullhorn item-icon"></i>
        </NavLink>
    </div>:
    null}
    {(props.active === 'initial'||props.active ==='gaming' ) ?
    <div className='main-item-container'>
        <NavLink className='main-item' to='/gaming'>
            <i className="fas fa-gamepad item-icon"></i>
            Gaming
            <i className="fas fa-gamepad item-icon"></i>
        </NavLink>
    </div>:
    null}
    {(props.active === 'initial'||props.active ==='business' ) ?
    <div className='main-item-container'>
        <NavLink className='main-item' to='/health'>
            <i className="fas fa-heartbeat item-icon"></i>
            Health
            <i className="fas fa-heartbeat item-icon"></i>
        </NavLink>
    </div>:
    null}
    <ChoiceContainer active={props.active}/>
</div>
}

export default Main