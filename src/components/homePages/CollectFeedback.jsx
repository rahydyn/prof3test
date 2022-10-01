import React from "react";
import { useLocation } from "react-router-dom";
import { Textarea, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDataCreate } from "../../hooks/useDataCreate";
import { Text } from "@chakra-ui/react";

// import { useNavigate } from "react-router-dom"

import { TwitterIcon, TwitterShareButton } from "react-share";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export function CollectFeedback() {
  //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
  const state = useLocation().state;
  // console.log(state);

  let [value, setValue] = useState("");

  useEffect(() => {
    if (state) setValue(state);
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  // TODO:
  //テストログインID⇨テストでは切り替えてください
  const logedInUserId = "-ND6W54zApUpQdX6I5bY";
  const logedInUsername = "Yamato Sayaka";
  // const logedInUserId = "-ND6WFQd0XdMDvvjHGU0";
  // const logedInUsername = "Masato";

  //   const dataRead = useDataRead;
  //   const logedInUser = dataRead("users", logedInUserId);
  //   const logedInUsername = logedInUser.username;
  //   console.log("logedInUsername");
  //   console.log(logedInUsername);

  //   ユーザー一覧
  //   "users": {
  //     "-ND6W54zApUpQdX6I5bY": {
  //       "createdAt": "2022-09-29T04:32:23.492Z",
  //       "imageUrl": "",
  //       "username": "Yamato Sayaka"
  //     },
  //     "-ND6WFQd0XdMDvvjHGU0": {
  //       "createdAt": "2022-09-29T04:33:05.840Z",
  //       "imageUrl": "",
  //       "username": "Masato"
  //     },
  //     "-ND6WIAu0qiVaZ4QWWWC": {
  //       "createdAt": "2022-09-29T04:33:17.122Z",
  //       "imageUrl": "",
  //       "username": "Natsumi"
  //     },
  //     "-ND6WKYlum6_OndQhmrC": {
  //       "createdAt": "2022-09-29T04:33:26.841Z",
  //       "imageUrl": "",
  //       "username": "Yuka"
  //     },
  //     "-ND6WN-E2W7EctUGB2te": {
  //       "createdAt": "2022-09-29T04:33:36.855Z",
  //       "imageUrl": "",
  //       "username": "Tadashi"
  //     }
  //   }

  const dataCreate = useDataCreate;

  const [feedId, setFeedId] = useState();

  const registerNewQuestion = () => {
    const tableName = "questions";
    const struct = {
      userId: logedInUserId,
      username: logedInUsername,
      content: value,
      createdAt: new Date().toISOString(),
    };
    const createdPromise = dataCreate(tableName, struct);
    // TODO: ページ遷移処理
    createdPromise.then((value) => {
      setFeedId(value);
    });
    console.log(feedId);
    setFeedUrl(
      "https://profile3-0-profile-project-onfm.vercel.app/chats/" +
        String(feedId)
    );
    onOpen();
  };

  const [feedUrl, setFeedUrl] = useState();

  //ボタンを押したら送信モーダル
  const { isOpen, onOpen, onClose } = useDisclosure();

  //モーダル閉じたらフィードに移動
  // const navigate = useNavigate()
  // const ModalClose = () => {
  //       navigate("/FeedContents")
  // }

  return (
    <>
      <div className="collect_feedback_top">
        <Flex>
          {/* <Box p="4" bg="" className="return_button"> */}
          <Link to="/">
            <ChevronLeftIcon boxSize={6} className="return_button" />
          </Link>
          {/* </Box> */}
          <Text fontSize="xl" className="collect_feedback_title">
            フィードバック募集画面
          </Text>
        </Flex>
      </div>
      <div className="collect_feedback_textarea">
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="例):私の長所を教えてください！"
          width={"80vw"}
          height={"20vh"}
        />
      </div>
      <div className="collect_feedback_button_div">
        <button
          className="collect_feedback_button"
          onClick={registerNewQuestion}
        >
          送信
        </button>
      </div>

      {/* 送信ボタンを押したら共有モーダル表示 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィードバック募集を共有</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TwitterShareButton
              url={feedUrl}
              title={value}
              // via="Kill_In_Sun"
              // related={["Kill_In_Sun", "GatsbyJS"]}
              // hashtags={post.frontmatter.tags}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
