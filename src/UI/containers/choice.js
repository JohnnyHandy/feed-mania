import React from 'react'
import * as logos from '../../assets/logos/index'


const Choice = (props)=>{
    return props.active ==='world' ?
        <div className='choice-container'>
                    <logos.ABC/>
        </div>
     : null
}

export default Choice