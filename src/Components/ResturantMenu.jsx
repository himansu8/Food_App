import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
export default function ResturantMeny() {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()
const [itemsInfo, setItemsInfo] =  useState({})
    useEffect(
        () => {
            async function fetchData() {
                try {
                    let res = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`)
                    console.log(res)
                    setResInfo(res.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
        }, []
    )

useEffect(()=>{
    if(resInfo){
        setItemsInfo(resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0])
            console.log(itemsInfo)
    }
},[resInfo])
 

    if (resInfo == null) return <Shimmer />
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;


    //console.log(itemsInfo)
    return (
        <div className="menu">
            <h1>{name} </h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {/* <ul>
                {itemsInfo?.map((ele) => (
                    <li key={ele.card.info.id}>
                        {ele.card.info.name} - Rs.{ele.card.info.price / 100}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
