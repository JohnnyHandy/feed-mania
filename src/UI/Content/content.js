import React from 'react'
import {Card,CardTitle,CardText} from 'reactstrap'

import './content.css'


const content = (props)=>{
    return(
            <Card className='content'>
                <CardTitle>Titulo</CardTitle>
                <CardText>Texto</CardText>
            </Card>
    )
}

export default content