import { Link } from "react-router-dom";
import { ChatsContent } from "./ChatsContents";
import { useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
// import { useParams } from "react-router-dom";

import "../../css/Chats.css";

export function Chats() {
  //useLocationを使ってFeedContentsから値を受け取る
  const location = useLocation();
  console.log(location);
  const questiontext = location.state.whatfeedtext;
  console.log(questiontext);
  const feedId = location.state.pushQuestionID;
  console.log(feedId);

  return (
    <>
      <div className="chats_header">
        <div>
        <Link to="/">
            <ChevronLeftIcon boxSize={6} className="return_button" />
          </Link>
        </div>
        <div className="chats_title"><p className="chat_title_text">フィードバックを送信する</p></div>
      </div>

      <div className="chats_question">{questiontext}</div>
      <ChatsContent feedId={feedId} />
    </>
  );
}
