import Video from "./Video";

const HeroText = () => {
  return (
    <div className=' text-center'>
      <div className='text-[9vw] uppercase font-light leading-[8vw]'>
        The spark 
      </div>
      <div className='flex justify-center gap-2 items-center text-[9vw] uppercase font-light leading-[8vw]'>
        Who<div className="w-60"> <Video className='rounded-full'/></div>
      </div>
      <div className=' text-[9vw] uppercase font-light leading-[8vw]'>
      generates 
      </div>
      <div className='text-[9vw] uppercase font-light leading-[8vw]'>
        there 
      </div>
      <div className='text-[9vw] uppercase font-light leading-[8vw]'>
      creativity
      </div>
     
    </div>
  );
};

export default HeroText;
