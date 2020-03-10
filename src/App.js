import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }
  }

componentDidMount() {
  axios.get('https://api.github.com/users/')
}

  render() {
    <div>
      <UserCard />
      <FollowerList />
    </div>
  }
  
}

export default App;
