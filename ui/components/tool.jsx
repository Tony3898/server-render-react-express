import React, {Component} from 'react';
import axios from 'axios'


class Tool extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('tool')
    //axios.get('api/auth.getLoggedInUserData').then(r=>console.log(r)).catch(e=>console.log(e.message))
  }

  render() {
    return (<div>
      <h1>Tool SSRs</h1>
    </div>)
  }
}

export default Tool
