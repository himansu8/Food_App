// import React from 'react'
import { CDN_URL } from "../utils/constants.js"




function  Card(props) {
  const { resData } = props
  const { name, cuisines, avgRating, costForTwo } = resData?.info
  return (
    <div className="res_card">
      <img className="res_logo"
        src={CDN_URL + resData.info.cloudinaryImageId
        } />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  )
}

export default Card