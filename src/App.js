import React,{Component} from 'react';

import Layout from './UI/Layout/layout'
// import * as url from './utility/stringKeys'

// import Parser from 'rss-parser'


class App extends Component {
  
  FetchDataFromRssFeed() {
    var CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    // var urlArray = []
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var myObj = JSON.parse(request.responseText);
        console.log(myObj)
      }
    }
    request.open("GET",CORS_PROXY+'https://feed2json.org/convert?url=http%3A%2F%2Frss.cnn.com%2Frss%2Fcnn_world.rss', true);
    request.send();
  }

  componentDidMount() {
    this.FetchDataFromRssFeed()
  }
 
render(){
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
    <Layout className='layout'/>
  );
}

 
}

export default App;
