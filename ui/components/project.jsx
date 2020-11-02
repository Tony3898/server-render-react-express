import React, {Component} from 'react';
import axios from 'axios'

class Project extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('api/auth.getLoggedInUserData').then(r=>console.log(r)).catch(e=>console.log(e.message))
  }

  render() {
    return (<h1>Projects</h1>)
  }
}

export default Project
