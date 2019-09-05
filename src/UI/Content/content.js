import React from 'react'
import {Card,CardTitle,CardText} from 'reactstrap'

import './content.css'


const content = (props)=>{
    let itemElement = null
    itemElement = props.contentData ? props.contentData.items.map((i,index)=>{
        console.log(i)
    }) : null
    return(
            <Card className='content'>
                <CardTitle>Titulo</CardTitle>
                <CardText>Texto</CardText>
            </Card>
    )
}

export default content