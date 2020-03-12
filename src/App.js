import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FollowersList from './FollowersList'
import UserCard from './UserCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }
  }

componentDidMount() {
  axios.get('https://api.github.com/users/b-dubz79')
  .then(response=>{
    this.setState({
      userInfo: response.data
    })
  })

}


  render() {
    return(
    <div className='mainContainer'>
      <UserCard userInfo={this.state.userInfo}/>
      <FollowersList />
    </div>
    )
  }
  
}

export default App;
