import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Restaurantcategory from "./Restaurantcategory";



export default function ResturantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [itemsInformation, setItemsInformation] = useState([]);
  const [showItems, setShowItems] = useState(false)
  const [showIndex, setShowIndex] = useState(null)

  useEffect(() => {
    async function fetchData() { 
      try {
        let res = await axios.get(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
        );

        //set timeout
        //console.log(res, 1);
        setResInfo(res.data);
        setItemsInformation(
          res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card.itemCards
        );
        // let test =res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
        // console.log( res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards, 5); //has value
        // console.log(resInfo, 2); //null
        //console.log(itemsInformation, 6); //null

        //console.log(categories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },
    [resId]);

  useEffect(() => {
    if (resInfo) {
      //console.log(resInfo, 3);
    }
    // console.log(itemsInformation, 4);
  }, [resInfo]);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(ele => ele.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  //console.log(categories)
 
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemsInformation?.map((ele) => (
          <li key={ele.card.info.id}>
            {ele.card.info.name} - Rs.{ele.card.info.price / 100 || ele.card.info.defaultPrice / 100 }
          </li>
        ))}
      </ul> */}

      {/* categories to accordian/ */}
      {categories.map((category, index) => (
        <Restaurantcategory data={category.card.card} key={index} 
        showItems={index === showIndex}
        setShowIndex={()=>setShowIndex(index === showIndex ? null : index)} />
      ))}
    </div>
  );
}
