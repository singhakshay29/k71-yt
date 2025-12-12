import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom';

interface StairsProps {
  children: React.ReactNode;
}
export default function Stairs({ children }: StairsProps) {
  const stairParent = useRef(null);
  const pageRef = useRef(null);
  const location=useLocation().pathname;
  
  useGSAP(function () {
    const timeline = gsap.timeline();
    timeline.to(stairParent.current, {
      display: "block",
    });
    timeline.from(".stair", {
      height: 0,
      stagger: { amount: -0.1 },
    });
    timeline.to(".stair", {
      y: "100%",
      stagger: { amount: -0.1 },
    });
    timeline.to(stairParent.current, {
      display: "none",
    });
    timeline.to(".stair", {
      y: "0%",
    });
    gsap.from(pageRef.current,{
      opacity:0,
      delay:1,
    })
  },[location]);
  return (
    <div>
      
    <div ref={stairParent} className='h-screen w-full flex fixed z-20 top-0'>
      <div className='h-full w-full flex '>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
    </div>
    <div ref={pageRef}>
     {children}
    </div>
    </div>
  );
}
