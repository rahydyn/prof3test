import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataList } from "../../hooks/useDataList";


// import { Link } from 'react-router-dom'

export function FeedContents() {
  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");

  const logedInUserId = "-ND6W54zApUpQdX6I5bY";
  // const [friendList, setFriendList] = useState([])
  //
  //
  // setFriendList([1, 2, 3, 4, 5, 6])
  const friendList = [1, 2, 3, 4, 5, 6, 10, logedInUserId];

  //テストデータ
  //   const testFeedContents = [
  //     {
  //       id: 0,
  //       userID: 5,
  //       username: "sayaka yamato",
  //       text: "私の長所ってなんですか？",
  //     },
  //     {
  //       id: 1,
  //       userID: 5,
  //       username: "sayaka yamato",
  //       text: "私の特徴ってなんですかね？",
  //     },
  //     {
  //       id: 2,
  //       userID: 10,
  //       username: "masato",
  //       text: "今日のプレゼンどうでした？",
  //     },
  //     { id: 3, userID: 2, username: "natumi", text: "私って何色が似合うかなあ" },
  //     {
  //       id: 4,
  //       userID: 5,
  //       username: "sayaka yamato",
  //       text: "私の直すべきところってどこかな...",
  //     },
  //   ];
  const dataList = useDataList;
  const tableName = "questions";
  const queryKey = "userId";
  const feedContents = friendList
    .map((friendId) => {
      const queryValue = friendId;
      const { data } = dataList(tableName, queryKey, queryValue);
      if (!data) {
        return;
      } else {
        return data;
      }
      // return queryValue;
    })
    .filter((e) => typeof e !== "undefined");
  //   console.log(feedContents);

  //クリックされた質問判定
  const WhatFeed = (e) => {
    console.log(e);
    //配列のキーとidが一致してるときにできる処理...
    const pushQuestionID = e.target.id;
    console.log(pushQuestionID);
    const whatfeedtext = e.target.innerText; //記入した質問本文を定数に入れる
    navigate(`/chats/${pushQuestionID}`, {
      state: { whatfeedtext: whatfeedtext, pushQuestionID: pushQuestionID },
    }); //ページ遷移と共に値を持っていく
  };

  //   const feedlist = [];
  //   for (let i = 0; i < testFeedContents.length; i++) {
  //     feedlist.push(
  //       <Box bg="white" w="100%" p={4} color="black" mb={5} key={feedlist}>
  //         <p>{testFeedContents[i].username}</p>
  //         <p onClick={WhatFeed} id={i}>
  //           {testFeedContents[i].text}
  //         </p>
  //       </Box>
  //     );
  //   }

  return (
    <>
      
      {feedContents.map((data) =>
        Object.entries(data).map(([key, item]) => {
          //   console.log(key, item.userId);
          return (
            <Box className="feed_box" bg={"rgba(255, 255, 255, 0.7)"} w="100%" p={4} color="black" mb={5} key={key}>
              <p className="feed_user_name">{item.username}</p>
              <p className="feed_contents_text" onClick={WhatFeed} id={key}>
                {item.content}
              </p>
            </Box>
          );
        })
      )}
      <button onClick={NewFeedContents} className="feed_add_button">+</button>
    </>
  );
}
