import { Route, Routes } from "react-router-dom";
import { Chats } from "./components/feedPages/Chats";
import { CollectFeedback } from "./components/homePages/CollectFeedback";
import { MyProfilePage } from "./components/myPages/MyprofilePage";
import { QuestionSamplePage } from "./components/homePages/QuestionSamplePage";
import { UnderTabBar } from "./components/templates/UnderTabBar";
import { FeedContents } from "./components/feedPages/FeedContents";
import { SettingPage } from "./components/myPages/SettingPage";
import { BasicCard } from "./components/profileCards/BasicCard";
import { LikeCard } from "./components/profileCards/LikeCard";
import { ValueCard } from "./components/profileCards/Valuecard";
import { ActivityCard } from "./components/profileCards/ActivityCard";

// import { ChatsContents } from "./ChatsContents";



export const RouterConfig = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<UnderTabBar />} />
                    <Route path="/myprofile" element={<MyProfilePage />} />
                    <Route path="/questionsamples" element={<QuestionSamplePage />} />
                    <Route path="/collectfeedback" element={<CollectFeedback />} />
                    <Route path="/chats" element={<Chats />} />
                    <Route path="/undertabbar" element={<FeedContents />} />
                    <Route path="/chats/:feedID" element={<Chats />} />
                    <Route path="/SettingPage" element={<SettingPage />} />
                    <Route path="/BasicCard" element={<BasicCard />} />
                    <Route path="/LikeCard" element={<LikeCard />} />
                    <Route path="/ValueCard" element={<ValueCard />} />
                    <Route path="/ActivityCard" element={<ActivityCard />} />
                    {/* <Route path="/FeedContents" element={<FeedContents />} /> */}
                </Routes>
        </>
    );
};