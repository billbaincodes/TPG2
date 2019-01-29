import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Splash from './components/Splash.js'
import Feed from './components/Feed.js'
import CommentList from './components/CommentList'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router >
        <div>
        <Route path="/" component={Splash} exact/>
        <Route path="/feed" component={Feed} /> 
        <Route path="/comments" component={CommentList} />
        </div>
      </Router>
    );
  }
}

export default App;
