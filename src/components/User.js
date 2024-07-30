import React from 'react'

function User({name,location,contact}) {
  return (
    <div style={{border:"1px solid black", padding:"20px"}}>
       <h2>
            Name: {name}
        </h2>
        <h3>
            Location: {location}
        </h3>
        <h4>
            Contact: {contact}
        </h4>
    </div>
  )
}

export default User