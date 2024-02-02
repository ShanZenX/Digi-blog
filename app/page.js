import Category from "./Components/home-components/Category";
import Slider from "./Components/home-components/Home";
import MiddleBar from "./Components/home-components/MiddleBar";
import Question from "./Components/home-components/Question";
import RecentBlogs from "./Components/home-components/RecentBlogs";
import TopBlogs from "./Components/home-components/TopBlogs";


export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Slider />
      <TopBlogs />
      <Category />
      <RecentBlogs />
      <MiddleBar />
      <Question />
    </div>
  );
}
