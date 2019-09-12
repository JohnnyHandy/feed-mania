import React,{Component} from 'react';

import Layout from './UI/Layout/layout'
// import * as url from './utility/stringKeys'

import Parser from 'rss-parser'

let parser = new Parser();

(async () => {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  let feed = await parser.parseURL(CORS_PROXY+'https://feeds.foxnews.com/foxnews/world.xml');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();
class App extends Component {
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

  // componentDidMount() {
  //   this.FetchDataFromRssFeed()
  // }
  
 
render(){
  const changeFeed = (data)=>{
   this.FetchDataFromRssFeed(data)
  }
//   let parser = new Parser()
//   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

//  parser.parseURL(CORS_PROXY + 'https://feeds.reuters.com/Reuters/worldNews', function(err, feed) {
//   console.log(feed);
//   console.log(err)
//   feed.items.forEach(function(entry) {
//     console.log(entry.title + ':' + entry.link);
//   })
// })
  return (
    <Layout contentData = {this.state.jsonObj ? this.state.jsonObj : null} 
    changeFeed = {(data)=>changeFeed(data)} 
    className='layout'/>
  );
}

 
}

export default App;
