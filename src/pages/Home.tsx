import BottomText from "../components/Home/BottomText"
import HeroText from "../components/Home/HeroText"
import Video from "../components/Home/Video"

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video/>
      </div>
      <div className=" h-screen w-screen relative  font-[lausanneLight]">
        <HeroText/>
        <BottomText/>
      </div>
    </div>
  )
}

export default Home