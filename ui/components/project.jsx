import React, {Component} from 'react';
import axios from 'axios'
import Tool from './tool'

class Project extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('pro')
    axios.get('api/auth.getLoggedInUserData').then(r => console.log(r)).catch(e => console.log(e.message))
  }

  render() {
    return (<div>
      <h1>Project SSRs</h1>
      <Tool/>
    </div>)
  }
}

export default Project
