import { useContext, useRef, useState } from "react";
import h1Img1 from '../../assets/Thumbnail.png'
import h1Img2 from  '../../assets/Thumbnail2.jpg'
import meggieImg from '../../assets/MEGGIE_640X290_2.jpg';
import camilleImg from '../../assets/CAMILLE.jpeg';
import Blog1 from '../../assets/BlogImg1.png';
import Blog2 from '../../assets/BlogImg2.jpg';
import './Navbar.css';
import { IoClose } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../context/NavContext";
const FullScreenNavbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const fullNavLink=useRef(null);
    const {navOpen,setNavOpen} =useContext(NavbarContext);
      console.log(navOpen,setNavOpen);
      
    useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
      // Stair animation (exact like video)
      tl.from(".stairing", {
        height: 0,
        transformOrigin: "top",
        duration: 0.9,
        stagger: 0.08,
      });
    
      // Navbar container reveal
      tl.from(
        fullNavLink.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
    
      // Menu links flip animation
      tl.from(
        ".link h1",
        {
          rotateX: -90,
          transformOrigin: "top center",
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.3"
      );
    }, []);
    const handleHover = (index: number) => {
      setHoveredIndex(index);
      gsap.fromTo(
        ".marquee__inner",
        { xPercent: 0 },
        { xPercent: -50, duration: 6, ease: "linear", repeat: -1 }
      );
    };
    
    const handleLeave = () => {
      setHoveredIndex(null);
      gsap.killTweensOf(".marquee__inner");
    };
    const closeMenu = () => {
      gsap.to("#fullScreenNav", {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power3.inOut",
      });
    };
      
    const styleLink =
    "link origin-top border-t border-white/50 w-full h-[120px] flex items-center justify-center overflow-hidden transform-gpu backface-visible";
  
  const styleH1 = "text-8xl uppercase font-medium";
  
  return (
    <div id="fullScreenNav" className={` ${!navOpen && 'hidden'} h-screen w-full absolute  flex flex-col`}>
        <div  className="h-screen w-full fixed">
        <div className='h-full w-full flex '>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
      </div>
        </div>
        <div ref={fullNavLink} className="relative">  
       <div className="px-3 flex justify-between items-center w-full h-20 shrink-0">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          width='103'
          height='44'
          viewBox='0 0 103 44'>
          <path
            fill-rule='evenodd'
            d='M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z'></path>
        </svg>
        <IoClose className="text-7xl cursor-pointer" onClick={closeMenu} />
        </div>
        <ul className="flex-1 flex flex-col justify-center items-center w-full [perspective:1200px]">
        <li
          className={`${styleLink} transition-all `}
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={handleLeave}
          >
          {hoveredIndex !== 0  ? (
             <div className="flex flex-col justify-center items-center w-full py-2">
                 <h1 className={styleH1}>Work</h1>
             </div>
          ) : (
            <div className="w-full bg-[#D3FD50] text-black overflow-hidden py-2">
            <div className="marquee">
              <div className="marquee__inner">
                <img src={h1Img1} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To See Everything</h1>
                <img src={h1Img2} className="item-img w-52 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To See Everything</h1>
                <img src={h1Img1} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To See Everything</h1>
                <img src={h1Img2} className="item-img w-52 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To See Everything</h1>
              </div>
            </div>
          </div>
          
          )}
        </li>
        <li
          className={`${styleLink} transition-all `}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleLeave}>
          {hoveredIndex !== 1  ? (
             <div className="flex flex-col justify-center items-center w-full py-2"> 
                 <h1 className={styleH1}>Agency</h1>
             </div>
          ) : (
            <div className="w-full bg-[#D3FD50] text-black overflow-hidden py-2">
            <div className="marquee">
              <div className="marquee__inner">
                <img src={meggieImg} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To know everything</h1>
                <img src={camilleImg} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To know everything</h1>
                <img src={meggieImg} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To know everything</h1>
                <img src={camilleImg} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>To know everything</h1>
              </div>
            </div>
          </div>
          
          )}
        </li>
        <li
          className={`${styleLink} transition-all `}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleLeave}
          >
          {hoveredIndex !== 2  ? (
             <div className="flex flex-col justify-center items-center w-full py-2"> 
                 <h1 className={styleH1}>Contact</h1>
             </div>
          ) : (
            <div className="w-full bg-[#D3FD50] text-black overflow-hidden py-2">
            <div className="marquee">
              <div className="marquee__inner">
                {/*<img src={meggieImg} className="item-img w-48 h-24 rounded-full" />*/}
                <h1 className={`item-text ${styleH1}`}>To Send a fax</h1>
                {/*<img src={camilleImg} className="item-img w-48 h-24 rounded-full" />*/}
                <h1 className={`item-text ${styleH1}`}>To Send a fax</h1>
                {/*<img src={meggieImg} className="item-img w-48 h-24 rounded-full" />*/}
                <h1 className={`item-text ${styleH1}`}>To Send a fax</h1>
                {/*<img src={camilleImg} className="item-img w-48 h-24 rounded-full" />*/}
                <h1 className={`item-text ${styleH1}`}>To Send a fax</h1>
              </div>
            </div>
          </div>
          
          )}
        </li>
        <li
          className={`${styleLink} transition-all border-b`}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleLeave}>
          {hoveredIndex !== 3  ? (
             <div className="flex flex-col justify-center items-center w-full py-2"> 
                 <h1 className={styleH1}>Blog</h1>
             </div>
          ) : (
            <div className="w-full bg-[#D3FD50] text-black overflow-hidden py-2">
            <div className="marquee">
              <div className="marquee__inner">
                <img src={Blog1} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>Read the articles</h1>
                <img src={Blog2} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>Read the articles</h1>
                <img src={Blog1} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>Read the articles</h1>
                <img src={Blog2} className="item-img w-48 h-24 rounded-full" />
                <h1 className={`item-text ${styleH1}`}>Read the articles</h1>
              </div>
            </div>
          </div>
          
          )}
        </li>
      </ul>
        </div>
    </div>
  );
};

export default FullScreenNavbar;
