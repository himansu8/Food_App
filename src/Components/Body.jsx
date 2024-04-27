import Card from "./Card"
//import resList from "../utils/mockData.js"
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
function Body() {
  //console.log(resList)
  const [resturantData, setResturantData] = useState([])
  const [filterResturantData, setFilterResturantData] = useState([])

  const [searchText, setSearchText] = useState("")


  async function fetchData() {
    try {
      let res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      console.log(res)
      //console.log(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setResturantData(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setFilterResturantData(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(
    () => {
      fetchData()
    }, []
  )
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false)
    return <h1>Looks like you are offline!! Please check your interent connection!</h1>


  if (resturantData.length === 0) {
    return <Shimmer />
  }
  return (

    <div className="body">
      <div className="filter_btn1">
        <div className="search">
          <input type="text" className="search_box" value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="search_btn"
            onClick={() => {
              console.log(searchText)
              const filteredResto = resturantData.filter((ele) => ele.info.name.toLowerCase().includes(searchText.toLowerCase()))
              //console.log(filteredResto)
              //setResturantData(filteredResto) 
              setFilterResturantData(filteredResto)
            }}>Search</button>
        </div>
        <button className="filter_btn"
          onClick={() => {
            const filteredData = resturantData.filter((ele) => ele.info.avgRating > 4.3);
            console.log(filteredData)
            setFilterResturantData(filteredData)
          }}
        >Top Rated Resturants</button>
      </div>.
      <div className="resto_cont">
        {filterResturantData.map((ele) => (
          <Link key={ele.info.id} to={`/resturants/${ele.info.id}`}><Card resData={ele} /></Link>

        ))}

      </div>

    </div>
  )
}

export default Body 