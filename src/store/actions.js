import * as actions from './actionTypes'
import axios from 'axios'
const RSSParser = require('rss-parser');

export const loadData = (data)=>{
    console.log(data)
    return async(dispatch)=>{
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
            axios.get(CORS_PROXY+data.url)
            .then((res) => {
                let parser = new RSSParser();
                parser.parseString(res.data, (err, feed)=> {
                dispatch(setContent(feed))
                console.log(feed)
                console.log(err)
                });
            })
            .catch((err) => {
                console.log(err);
            })  
    }
}

export const setContent = (data)=>{
    console.log(data)
    
    return{
        type:actions.SET_CONTENT,
        data:data
    }
}