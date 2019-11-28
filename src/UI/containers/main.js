import React from 'react'
import {NavLink} from 'react-router-dom'
import ChoiceContainer from '../containers/choice'

const Main = (props)=>{  
return <div className='main-navbar'> 
   
    <div className={'main-item-container'}>
        <NavLink className='main-item' to={props.active === 'world' ? '/' : '/world'}>  
        World
        <i className="fas fa-globe item-icon"></i>
        </NavLink>
    </div>
    {props.active === 'world' ? <ChoiceContainer active={props.active}/>:''}   
    <div className='main-item-container'>
        <NavLink className='main-item' to={props.active === 'sports' ? '/' : '/sports'}>
            Sports
            <i className="fas fa-football-ball item-icon"></i> 
        </NavLink>
    </div>
    {props.active === 'sports' ? <ChoiceContainer active={props.active}/>:''}   
    <div className='main-item-container'>
        <NavLink className='main-item' to={props.active === 'technology' ? '/' : '/technology'}>
            Technology
            <i className="fas fa-robot item-icon"></i>
        </NavLink>
    </div> 
    { props.active ==='technology' ? <ChoiceContainer active={props.active}/> : ''}
    <div className='main-item-container'>
        <NavLink className='main-item' to={props.active === 'business' ? '/' : '/business'}>
            Business
            <i className="fas fa-comment-dollar item-icon"></i>
        </NavLink>
    </div>
    { props.active === 'business' ? <ChoiceContainer active={props.active}/> : ''}
    <div className='main-item-container'>
        <NavLink className='main-item' to={props.active === 'politics' ? '/' : '/politics'}>
            Politics
            <i className="fas fa-bullhorn item-icon"></i>
            {props.active === 'politics' ? <ChoiceContainer active={props.active}/> : ''}
        </NavLink>
    </div>
    { props.active === 'politics' ? <ChoiceContainer active={props.active}/> : ''}
    <div className='main-item-container'>
        <NavLink className='main-item' to={props.active === 'gaming' ? '/' : '/gaming'}>
            Gaming
            <i className="fas fa-gamepad item-icon"></i>
        </NavLink>
    </div>
    {props.active === 'gaming' ? <ChoiceContainer active={props.active}/>: ''}
    <div className='main-item-container'>
        <NavLink className='main-item' to={'/health' ? '/' : 'health'}>
            Health
            <i className="fas fa-heartbeat item-icon"></i>
        </NavLink>
    </div>
    {props.active ===  'health' ? <ChoiceContainer active={props.active}/> :''}
</div>
}

export default Main