import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const imagesArray = [
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
  "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
  "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
];

const Agent = () => {
  const imgdivref = useRef(null);
  const imgref = useRef<HTMLImageElement | null>(null);
  
  
  useGSAP(function () {
    gsap.to(imgdivref.current, {
      scrollTrigger: {
        trigger: imgdivref.current,
        start: "top 25%",
        end: "end -80%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        anticipatePin:1,
        scrub:1,
        pinType:'transform',
        onUpdate:function(self){
          let index;
          if(self.progress<1){
             index=Math.floor(self.progress*imagesArray.length)
          }else{
            index=imagesArray.length-1;
          }
          if (imgref.current) {
            imgref.current.src = imagesArray[index];
          }
        }
      },
    });
  });
  return (
    <>
      <div className='section1'>
        <div
          ref={imgdivref}
          className='absolute w-52 top-[25%] left-[30%] overflow-hidden'>
          <img
            ref={imgref}
            src={imagesArray[0]}
            alt=''
            className='rounded-2xl h-full w-full object-cover'
          />
        </div>
        <div className=' flex flex-col gap-5 font-[lausanneMedium]  relative'>
          <div className='mt-[50vh]'>
            <h1 className='text-black text-[284px] text-center uppercase leading-[15vw]'>
              Sixty-
              <br />
              seventh
              <br />
              Twelve
            </h1>
          </div>
          <div className='flex justify-end'>
            <p className='text-5xl text-black w-1/2'>
              &nbsp; &nbsp; &nbsp;Our curiosity fuels our creativity. We stay
              humble and say no to big egos, even your own. A brand is alive. It
              has values, a personality, a story. If we forget that, we might
              achieve good numbers in the short term, but we kill it in the long
              term. That’s why we commit to bringing perspective, to building
              influential brands
            </p>
          </div>
        </div>
      </div>
      <div className='section2'></div>
    </>
  );
};

export default Agent;
