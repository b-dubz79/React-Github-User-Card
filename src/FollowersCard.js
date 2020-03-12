import React from 'react'

const FollowersCard = (props) => {
    console.log(props)
    return(
        <div>
            <h1>{props.follower.login}</h1>
            <img src={props.follower.avatar_url}></img>
        </div>
    )
}

export default FollowersCard