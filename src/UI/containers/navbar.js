import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import ChoiceContainer from './choice'

const Main = (props)=>{ 
    const [active,setActive]=useState('');
    function handleActive(data){
        if(active === data ){
            setActive('')
        }else{
            setActive(data)
        }
    } 
return( 
    <div className={props.navBar ?'main-navbar active-navbar' : 'main-navbar'}>
        <div className='main-item-container' style={{backgroundColor:'#7B1111'}}>
            <NavLink className='main-item' to='/world'>  
            World
            <i className="fas fa-globe item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('world')} className='arrow'><i className={active !== 'world' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        {active === 'world' ? <ChoiceContainer active={active}/>:''}   
        <div className='main-item-container' style={{backgroundColor:'#782581'}}>
            <NavLink className='main-item' to='sports'>
                Sports
                <i className="fas fa-football-ball item-icon"></i> 
            </NavLink>
            <div onClick={()=>handleActive('sports')} className='arrow'><i className={active !== 'sports' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        {active === 'sports' ? <ChoiceContainer active={active}/>:''}   
        <div className='main-item-container' style={{backgroundColor:'#1B10AA'}}>
            <NavLink className='main-item' to='/technology'>
                Tech
                <i className="fas fa-robot item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('technology')} className='arrow'><i className={active !== 'technology' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div> 
        { active ==='technology' ? <ChoiceContainer active={active}/> : ''}
        <div className='main-item-container' style={{backgroundColor:'#1F7595'}}>
            <NavLink className='main-item' to='/business'>
                Business
                <i className="fas fa-comment-dollar item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('business')} className='arrow'><i className={active !== 'business' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        { active === 'business' ? <ChoiceContainer active={active}/> : ''}
        <div className='main-item-container' style={{backgroundColor:'#106E1C'}}>
            <NavLink className='main-item' to='/politics'>
                Politics
                <i className="fas fa-bullhorn item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('politics')} className='arrow'><i className={active !== 'politics' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        {active === 'politics' ? <ChoiceContainer active={active}/> : ''}
        <div className='main-item-container' style={{backgroundColor:'#958919'}}>
            <NavLink className='main-item' to='/gaming'>
                Gaming
                <i className="fas fa-gamepad item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('gaming')} className='arrow'><i className={active !== 'gaming' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        {active === 'gaming' ? <ChoiceContainer active={active}/>: ''}
        <div className='main-item-container' style={{backgroundColor:'#BB7600'}}>
            <NavLink className='main-item' to='/health'>
                Health
                <i className="fas fa-heartbeat item-icon"></i>
            </NavLink>
            <div onClick={()=>handleActive('health')} className='arrow'><i className={active !== 'health' ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i></div>
        </div>
        {active === 'health' ? <ChoiceContainer active={active}/>: ''}
    </div>)
}

export default Main