import React,{Component} from 'react';

import Layout from './UI/Layout/layout'
import axios from 'axios'

const RSSParser = require('rss-parser');

// (async () => {
//   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
//   let feed = await parser.parseURL(CORS_PROXY+'https://feeds.foxnews.com/foxnews/world.xml');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();
class App extends Component {
 getWiredFeed(){
   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios.get(CORS_PROXY+'http://www.sportingnews.com/rss')
    .then((res) => {
      let parser = new RSSParser();
      parser.parseString(res.data, (err, feed)=> {
        console.log(feed)
        console.log(err)
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }
  state={
    jsonObj:undefined
  }
  
  
  FetchDataFromRssFeed(url) {
    var CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    // var urlArray = []
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var myObj = JSON.parse(request.responseText);
        console.log(myObj)
        this.setState({jsonObj:myObj})
      }
    }
    request.open("GET",CORS_PROXY+url, true);
    request.send();
  }

  componentDidMount() {
    this.getWiredFeed()
  }
  
 
render(){
  const changeFeed = (data)=>{
   this.FetchDataFromRssFeed(data)
  }
  return (
    <Layout contentData = {this.state.jsonObj ? this.state.jsonObj : null} 
    changeFeed = {(data)=>changeFeed(data)} 
    className='layout'/>
  );
}

 
}

export default App;
