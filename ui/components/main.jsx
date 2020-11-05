import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import Project from "./project";
import Tool from "./tool";

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('main')
  }

  render() {
    return (<Router history={createBrowserHistory()}>
      <div className="container=fluid">
        <Route path="/app/react/project" component={Project}/>
        <Route path="/app/react/tool" component={Tool}/>
      </div>
    </Router>)
  }
}

export default Main
