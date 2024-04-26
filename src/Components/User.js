import React, { useState } from 'react'

function User({ name, location }) {
  const [count, setCount] = useState(0)
  // const [count1] = useState(1)

  return (
    <div className='user-card'>
      <h1>count : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>inc</button>
      <button onClick={()=>{setCount(count-1)}}>dec</button>
      {/* <h1>count1 : {count1}</h1> */}
      <h2>Name:{name} </h2>
      <h3>Location:{location}</h3>
    </div>
  )
}

export default User