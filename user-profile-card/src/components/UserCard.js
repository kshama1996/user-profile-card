import React from "react";
import UserProfile from "./UserProfile";
import './UserStyle.css'
const UserCard = () => {
    console.log("XXX");
    const userData={
        name:'Lisa Elsa',
        bio:'Lisa holds a BA in Creative Writing and a Master’s Degree in Teaching from the University of Michigan',
        avatar:'./profile-image.jpg'
     }
    return <UserProfile  userData={userData} render={(props) => {
        console.log("PROP", props)
        return (
            <div class="card">
                <h2 className="heading">User Profile</h2>
                <div>             
                    <img className="userimg" src={props.avatar}></img>
                        <div className='user-details-row'>
                            <span className="user-text">Name :</span>
                            <span>{props.name}</span>
                        </div>

                        <div className='user-details-row'> 
                        <span className="user-text">Biography :</span>
                            <span>{props.bio}</span></div>                                 
                </div>

            </div>
        )
    }}
    />
}

export default UserCard