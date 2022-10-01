// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { ref, child, onValue } from "firebase/database";
import { db } from "../lib/firebase";

export const CategoryList = () => {
  // const navigate = useNavigate();
  // const navigateToDetailPage = (e) => {
  //   console.log(e.target.innerText);
  //   const clickCategory = e.target.innerText;
  //   navigate("/QuestionDetailPage", { state: clickCategory });
  // };

  //   const [categoryIds, setCategoryIds] = useState();
  //   const [categoryList, setCategoryList] = useState();

  const tableName = "questionCategory";
  const rootRef = ref(db);
  const tableRef = child(rootRef, tableName);

  return (
    <>
      {onValue(tableRef, (snapshot) => {
        if (snapshot.exists()) {
          const tmpData = snapshot.val();
          const categoryIds = [];
          const categoryList = [];

          Object.keys(tmpData).forEach((key) => {
            categoryIds.push(key);
            categoryList.push(tmpData[key].content);
            // console.log(key);
            // console.log(tmpData[key].content);
          });

          console.log(categoryIds);
          console.log(categoryList);

          return categoryIds.map((id, index) => (
            <SwiperSlide key={`${id}${categoryList[index]}`}>
              <button
              //   onClick={navigateToDetailPage()}
              >
                {categoryList[index]}
              </button>
            </SwiperSlide>
          ));
        } else {
          // TODO: 例外処理
          console.log("No data available");
        }
      })}
    </>
  );
};
