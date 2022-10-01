import "../../css/Home.css"
import "../../css/App.css"
import "swiper/css/navigation";
import { QuestionSlider } from "./QuestionSlider";




export function HomeContents() {
  return (
    <>
      <div className='home_greed'>
        <div className='home_greed_bold'>
          <p>Welcome!</p>
          <p>Please hear myself!</p>
        </div>
        <p className='home_greed_regular'>あなたについて質問してみよう！</p>
      </div>

      <div className='q_category'>
        <p>質問カテゴリ</p>
      </div>

      <QuestionSlider />

    </>

  );
}

