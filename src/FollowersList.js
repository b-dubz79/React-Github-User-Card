import React from 'react';
import UserCard from './UserCard'
import axios from 'axios'
import FollowersCard from './FollowersCard'

class FollowersList extends React.Component  {
    constructor(){
        super()
        this.state = {
            followersInfo: []
        } 
    }
        componentDidMount(){
        axios.get('https://api.github.com/users/b-dubz79/followers')
    .then(folResponse=>{
        console.log(folResponse.data);
        this.setState({
        followersInfo: folResponse.data
        });
    })
    }

    render(){
        return (

            <div className='listContainer'>
                {this.state.followersInfo.map(follower => 
                    (<FollowersCard follower={follower}/>)
                )}
            </div>
        )
    }
}

export default FollowersList
