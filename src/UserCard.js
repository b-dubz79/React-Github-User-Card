import React from 'react';

const UserCard = (props) => {
return(
    <div>
        <h1>{props.userInfo.name}</h1>
        <img src={props.userInfo.avatar_url}></img>
    </div>
)
}

export default UserCard