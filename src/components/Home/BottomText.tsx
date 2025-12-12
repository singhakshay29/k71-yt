import { Link } from "react-router-dom"


const BottomText = () => {
  return (
    <div className=' flex gap-4 justify-center  text-center'>
      <Link to={'/project'} className="text-[5vw] leading-[7vw] border-3 border-white px-8 rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]"> Projects</Link>
      <Link to={'/agent'} className="text-[5vw] leading-[7vw] border-3 border-white px-8 rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]"> Agency</Link>
    </div>
    )
  }

export default BottomText