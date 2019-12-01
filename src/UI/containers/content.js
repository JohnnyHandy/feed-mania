import React,{useState} from 'react'
import ChoiceContainer from './choice'

const Content = (props)=>{
    const [feedOptions,toggleFeedOptions]= useState(false)
    const titleBackgroundColor = ()=>{
        return (
            props.feedType === 'world' ?'#7B1111' : 
            props.feedType === 'sports' ?  '#782581':
            props.feedType === 'technology'?'#1B10AA':
            props.feedType === 'business' ? '#1F7595':
            props.feedType === 'politics' ? '#106E1C':
            props.feedType === 'gaming' ? '#958919':
            props.feedType === 'health' ? '#BB7600':'' 
            )
    }
    return(
        <div  className={props.navBar ? 'content-container' : 'content-container only-content'}>
            <div style={{backgroundColor:titleBackgroundColor()}} className='content-title'>
                {props.feedType}
            </div>
            <div onClick={()=>toggleFeedOptions(!feedOptions)} className='feed-options'>
                Check our {props.feedType} feed providers!
                 {feedOptions ? <ChoiceContainer active={props.feedType}/>:null}
            </div>
            
        </div>
    )
}

export default Content