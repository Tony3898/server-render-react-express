import React, {Component} from 'react';
import axios from 'axios'
import Tool from "./tool";

class Project extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.post('http://localhost:5001/api/auth.getLoggedInUserData').then(r => console.log(r)).catch(e => console.log(e.message))
  }

  render() {
    return (<h1>Project comp<Tool/></h1>)
  }
}

export default Project
