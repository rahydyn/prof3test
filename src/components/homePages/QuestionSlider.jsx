// 9月21日（水）
// スライダーの作成、微調整が必要と思うが...

import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/Slider.css";

// import required modules
import { Pagination } from "swiper";

import { useFirebase } from "../../hooks/useFirebase";

export function QuestionSlider() {
  const navigate = useNavigate();
  const WhatCategory = (e) => {
    console.log(e.target.innerText);
    const categoryName = e.target.innerText;
    const categoryId = e.target.id;
    navigate("/questionsamples", {
      state: { categoryName: categoryName, categoryId: categoryId },
    });
  };

  // [Added]22/09/27: Realtime Databaseを導入

  // const questioncategory = [
  //   "おすすめ質問",
  //   "就活",
  //   "恋愛",
  //   "遊び",
  //   "カテゴリ5",
  //   "カテゴリ6",
  //   "カテゴリ7",
  // ];
  const { data } = useFirebase("questionCategory");

  //9月22日(木)ベタガキをループにした
  // const categorylist = [];
  // for (let i = 0; i < questioncategory.length; i++) {
  //   categorylist.push(
  //     <SwiperSlide key={categorylist}>
  //       <button onClick={WhatCategory}>{questioncategory[i]}</button>
  //     </SwiperSlide>
  //   );
  // }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(data).map(([key, item]) => (
          <SwiperSlide key={key}>
            <button onClick={WhatCategory} id={key}>
              {String(item.content)}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
