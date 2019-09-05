import React from 'react'

import './index.css'
import bbc from './BBC_News_2019.svg'
import espn from './espn.svg' 
import fox from './fox-news.svg'
import nytimes from './new-york-times.svg'
import reuters from './reuters-2-1.svg'
import wallstreet from './wall-street-journal.svg'
import vox from './vox-1.svg'
import cnn from './cnn-1.svg'
import abc from './abc-broadcast.svg'
import yahoo from './yahoo-icon.svg'

export const BBC = ()=>{
    return(<img className='imgClass' src={bbc} alt='bbc'/>)
}
export const ESPN = ()=>{
    return(<img className='imgClass' src={espn} alt ='espn'/>)
}
export const FOX = ()=>{
    return(<img className='imgClass' src={fox} alt='fox-'/>)
}
export const NYTIMES =()=>{
    return(<img className='imgClass' src={nytimes} alt='nytimes'/>)
}
export const REUTERS =()=>{
    return(<img className='imgClass' src={reuters} alt='reuters'/>)
}
export const WALLSTREET =()=>{
    return(<img className='imgClass' src={wallstreet} alt='wallstreet'/>)
}
export const VOX = ()=>{
    return(<img className='imgClass' src={vox} alt='vox'/>)
}
export const CNN = ()=>{
    return(<img className='imgClass' src={cnn} alt='cnn'/>)
}
export const ABC = ()=>{
    return(<img className='imgClass' src={abc} alt='abc'/>)
}
export const YAHOO = ()=>{
    return(<img className='imgClass' src={yahoo} alt='yahoo'/>)
}

