import * as actions from './actionTypes'
import axios from 'axios'
const RSSParser = require('rss-parser');

export const loadData = (data)=>{
    console.log(data)
    return async(dispatch)=>{
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        if(data.parser==='0'){
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
        } else if(data.parser==='1'){
            console.log('xmhl')
            var request = new XMLHttpRequest();
            request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var myObj = JSON.parse(request.responseText);
                console.log(myObj)
                dispatch(setContent(myObj))
            }
            request.open("GET",CORS_PROXY+data.url, true);
            request.send();
            }
        }
        
    }
}

export const setContent = (data)=>{
    console.log(data)
    
    return{
        type:actions.SET_CONTENT,
        data:data
    }
}