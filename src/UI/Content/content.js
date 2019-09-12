import React from 'react'
import {Card,CardTitle,CardText} from 'reactstrap'

import './content.css'


const content = (props)=>{
    
    let itemElement = null
    itemElement = props.contentData ? props.contentData.items.map((i,index)=>{
        let summaryArray = i.summary.split('')
        let newSummary=[]
        for(let i = 0;i<=summaryArray.length;i++){
            if(summaryArray[i]==='<'){
                break
            }else{
                newSummary.push(summaryArray[i])
            }    
        }
        
        newSummary = newSummary.join('')
        newSummary = newSummary.replace('&#39'," ' ")
        return itemElement =  index < 10 ? (
            <Card className='content'>
                <CardTitle>{i.title}</CardTitle>
                <CardText>{newSummary}</CardText>
            </Card>
        ) : null
    }) : null
    return(
        <div>
        {itemElement}
        </div>
        
            // <Card className='content'>
            //     <CardTitle>Titulo</CardTitle>
            //     <CardText>Texto</CardText>
            // </Card>
    )
}

export default content