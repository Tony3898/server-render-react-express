import React, {Component} from 'react';
import axios from 'axios'

class Tool extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('pro')
    //axios.get('api/auth.getLoggedInUserData').then(r=>console.log(r)).catch(e=>console.log(e.message))
  }

  render() {
    return (<h1>Tool SSRs</h1>)
  }
}

export default Tool
