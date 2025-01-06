import React from "react";

function ProfileCard({ name, age, location}){
    return(
        <div className="profileCard">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default ProfileCard;