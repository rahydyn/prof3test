import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useDataList } from "../../hooks/useDataList";

export function FeedbackContents() {
  const logedInUserId = "-ND6W54zApUpQdX6I5bY";
  const friendList = [logedInUserId];

  // TODO: コンポーネント化
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

  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");
  //クリックされた質問判定
  const WhatFeed = (e) => {
    console.log(e);
    //配列のキーとidが一致してるときにできる処理...
    const pushQuestionID = e.target.id;
    console.log(pushQuestionID);
    const whatfeedtext = e.target.innerText; //記入した質問本文を定数に入れる
    navigate(`/Chats/${pushQuestionID}`, {
      state: { whatfeedtext: whatfeedtext, pushQuestionID: pushQuestionID },
    }); //ページ遷移と共に値を持っていく
  };

  return (
    <>
      {" "}
      {feedContents.map((data) =>
        Object.entries(data).map(([key, item]) => {
          //   console.log(key, item.userId);
          return (
            <Box bg="white" w="100%" p={4} color="black" mb={5} key={key}>
              <p>{item.username}</p>
              <p onClick={WhatFeed} id={key}>
                {item.content}
              </p>
            </Box>
          );
        })
      )}
      <button onClick={NewFeedContents}>+</button>
    </>
  );
}
