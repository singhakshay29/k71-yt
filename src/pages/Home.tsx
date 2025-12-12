import BottomText from "../components/Home/BottomText"
import HeroText from "../components/Home/HeroText"
import Video from "../components/Home/Video"

const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-screen fixed">
        <Video/>
      </div>
      <div className="flex flex-col justify-between gap-20 w-screen relative font-[lausanneMedium]">
        <HeroText/>
        <div className="h-10"></div>
        <BottomText/>
      </div>
    </div>
  )
}

export default Home