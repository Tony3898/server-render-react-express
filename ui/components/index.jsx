import React, {Component} from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App')
    axios.get('api/auth.getLoggedInUserData').then(r => console.log(r)).catch(e => console.log(e.message))
  }

  render() {
    return (<div>
      <h1>App.jsx</h1>
    </div>)
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
