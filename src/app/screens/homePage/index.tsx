import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { create } from "domain";


/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(retrievePopularDishes, (popularDishes) => ({ popularDishes }));
export default function HomePage() {
  // Selector => Data
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);

  useEffect(() => {

  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}












//  // Selector => Data
//   const { setPopularDishes } = actionDispatch(useDispatch());
//   const { popularDishes } = useSelector(popularDishesRetriever);

//   useEffect(() => {

//     // Backend server data request => Data
//     const result = [
//       {
//         "_id": "6acf1a9a409f748127b168f0",
//         "productStatus": "PROCESS",
//         "productCollection": "DISH",
//         "productName": "Kebab",
//         "productPrice": 10,
//         "productLeftCount": 100,
//         "productSize": "NORMAL",
//         "productVolume": 1,
//         "productDesc": "Delicious meal",
//         "productImages": [
//           "uploads/products/9e0dcf3c-5531-44a0-9aa2-48438c58bac1.jpg",
//           "uploads/products/2e67de67-e957-41f5-bd19-b59cbd0066df.jpg",
//           "uploads/products/004f8a2a-5661-4618-9f18-8e6d08d2b649.jpg"
//         ],
//         "createdAt": "2026-10-14T06:00:58.864Z",
//         "updatedAt": "2026-11-08T11:03:44.872Z",
//         "__v": 0,
//         "productViews": 1
//       },
//       {
//         "_id": "6adaee64d79e6463077f8a41",
//         "productStatus": "PROCESS",
//         "productCollection": "DISH",
//         "productName": "YUFKA MANTISI",
//         "productPrice": 15,
//         "productLeftCount": 104,
//         "productSize": "NORMAL",
//         "productVolume": 1,
//         "productDesc": "Yufka mantısı is a quick, oven-baked Turkish dish that mimics traditional manti using ready-made yufka (filo-like pastry sheets) rolled with a savory filling, baked until crispy, and topped with garlic yogurt and spiced butter.",
//         "productImages": [
//           "uploads/products/93ffc290-a7f5-4a33-a12a-07974133e79f.webp",
//           "uploads/products/3df1e416-7d4f-495e-aed9-e30c61f74eb6.jpg",
//           "uploads/products/886f3ae1-8535-40ef-897e-e231d80dc8ce.jpg",
//           "uploads/products/38a2ba29-ca54-4985-991e-3416ff63a019.webp"
//         ],
//         "producViews": 0,
//         "createdAt": "2026-10-23T05:19:32.575Z",
//         "updatedAt": "2026-10-23T05:19:32.575Z",
//         "__v": 0
//       },
//     ];

//     // Slice: Data => Store
//     //@ts-ignore
//     setPopularDishes(result);
//   }, []);