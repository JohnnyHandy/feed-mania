import React from 'react'
import bbc from './BBC_News_2019.svg'
import espn from './ESPN_wordmark.svg' 
import fox from './Fox_News_Channel_logo.svg'
import nytimes from './new-york-times.svg'
import reuters from './reuters-2-1.svg'
import wallstreet from './wall-street-journal.svg'
import vox from './Vox_logo.svg'
import cnn from './cnn-1.svg'
import abc from './abc-broadcast.svg'
import yahoo from './yahoo-icon.svg'

export const BBC = ()=>{
    return(<img src={bbc} alt='bbc'/>)
}
export const ESPN = ()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={espn} alt ='espn'/>)
}
export const FOX = ()=>{
    return(<img style={{maxWidth:'120px', maxHeight:'75px'}} src={fox} alt='fox-'/>)
}
export const NYTIMES =()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={nytimes} alt='nytimes'/>)
}
export const REUTERS =()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={reuters} alt='reuters'/>)
}
export const WALLSTREET =()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={wallstreet} alt='wallstreet'/>)
}
export const VOX = ()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={vox} alt='vox'/>)
}
export const CNN = ()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={cnn} alt='cnn'/>)
}
export const ABC = ()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={abc} alt='abc'/>)
}
export const YAHOO = ()=>{
    return(<img style={{maxWidth:'140px', maxHeight:'75px'}} src={yahoo} alt='yahoo'/>)
}

