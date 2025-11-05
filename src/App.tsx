import { useState, useEffect } from 'react'
import {Link, Element} from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import {AnimatePresence, easeInOut, motion} from 'framer-motion'
import landingvideo3 from './assets/landingvideo3.mp4'
import logo from  './assets/logo.png'
import Typewriter from "typewriter-effect";
import './App.css'
import { BsInstagram,  BsPerson,  BsTwitterX } from 'react-icons/bs'
import {  FaFacebookF } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { BiMenu } from 'react-icons/bi'
import AboutUs from './AboutUs'
import Partherwithus from './Partnerwithus'
import Ourwork from './Ourwork'
import SmoothScroll from './SmoothScroll'
import Contact from './Contact'







function App() {

   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const {ref:homeRef, inView: homeView} = useInView({
    threshold:0.4
  })

   const {ref:aboutRef, inView: aboutView} = useInView({
    threshold:0.10, triggerOnce:true
  })

   const {ref:fillRef, inView: fillView} = useInView({
    threshold:0.4
  })

     const {ref:fill2Ref, inView: fill2View} = useInView({
    threshold:0.4
  })

   const {ref:contactRef, inView: contactView} = useInView({
    threshold:0.4
  })


  const parentSlideVariant = {
    hidden: {opacity:0},
    show: {opacity:1, transition:{staggerChildren:0.5}}
  }

  const childSlideVariant = {
    hidden: {opacity:0 , x:-200},
    show: {opacity:1, x:0, transition:{duration:1.1, easeInOut}}
  }

  const [menuDropDown, setMenuDropDown] = useState<boolean>(false)


  

return (
  <>
  <SmoothScroll/>
  <Element name ='Home'>
    <div className="relative w-full subpixel-antialiased">
      <video src={landingvideo3} preload="none"  autoPlay loop muted playsInline disablePictureInPicture
        className="absolute w-full h-full object-cover blur-xs"
      />
    
      <div className="relative flex flex-col min-h-screen">
        <nav className="fixed top-0 w-full flex items-center sm:justify-between justify-evenly gap-28 md:gap-0 p-3 bg-transparent text-black font-bold z-1000">
<AnimatePresence initial = {false}>
        <button onClick={() =>setMenuDropDown(true)} className='p-1'><BiMenu className='md:text-3xl text-[1.5rem] cursor-pointer transition-all duration-300 ease-in-out hover:opacity-50 text-black 
        '/></button>
          
          {menuDropDown && 
          <motion.div className='flex flex-col z-1 bg-[#ffffff] fixed w-full md:max-w-85 max-w-95 top-0 left-0 font-medium text-[1.3rem] h-full max-h-125 gap-6 justify-between 
           will-change-transform'
          key = 'content' initial = {{ opacity:0}} animate = {{opacity:1}} exit = {{opacity:1}} transition={{type:'tween' , ease:'easeInOut', duration:0.6}}>
            <div className='flex flex-col gap-5 p-3'>
            <div className='flex justify-between items-center p-1 mb-2'>
            <h1 className='text-3xl '>Menu</h1>
            <button className='flex justify-end cursor-pointer' onClick={() =>setMenuDropDown(false)}><CgClose></CgClose></button>
            </div>
            {['Home', 'About us','Partner With Us','Our work', 'Contact'].map((item) => 
            <Link to = {item} smooth = {true} duration={700}><motion.li className='border-b list-none  border-[#3333335e] w-full max-w-65 leading-9 cursor-pointer text-[1.1rem]' whileHover={{opacity:0.6}} whileTap = {{scale:0.95}}>{item}</motion.li></Link>
            
            )}
            </div>
            <div className='flex items-center justify-center gap-5 mt-5 bg-[#333333] text-white p-4'>
          <BsTwitterX className='w-6 h-6 cursor-pointer'/><FaFacebookF className='w-6 h-6 cursor-pointer'/><BsInstagram className='w-6 h-6 cursor-pointer'/>
            </div>
  
            </motion.div>}
            
            </AnimatePresence>

           <img src = {logo} className={`md:w-22 w-17 ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'} transition-all ease-in-out duration-300`}  ></img>
            <Link to = 'Contact' duration={800} smooth = {true}>
            <button 
            className='font-semibold cursor-pointer p-1 transition-all hover:opacity-60  text-black ' ><BsPerson className='md:text-[2rem] text-[1.5rem]'/></button>
              </Link>
        </nav>

      
        

    <motion.div ref = {homeRef} variants={parentSlideVariant} initial = 'hidden' animate = {homeView ? 'show' : 'hidden'} className='flex grow' >
        <motion.div variants={childSlideVariant} className='flex flex-col items-center justify-center md:gap-13 gap-10 grow mb-10 text-black '>
        <h1 className='md:text-7xl text-[2.1rem]  font-medium [-webkit-text-stroke:0.1px_black]'>Premium Beach Sands</h1>
        <h2 className='md:text-6xl text-orange-200 text-shadow-black text-4xl text-shadow-[0px_0px_7px] subpixel-antialiased'>Loka<span className='md:text-2xl text-base align-super'>©</span></h2>
        <div className='md:text-[1.3rem] w-full md:max-w-134 text-base leading-7 max-w-90  md:leading-9 font-normal text-black [-webkit-text-stroke:0.1px_black] text-shadow-[0px_0px_10px_white]'>
     <Typewriter
     options={{
      cursor:''
     }}
          onInit={(typewriter) => {
              typewriter
            .changeDelay(25)
            .typeString("Giving people beautiful beach front to enjoy their holidays and their waterfront residential. We create experience for people to have a mesmerizing experience and unwind.")
            .pauseFor(1500)
            .deleteChars(7)
            .pauseFor(200)
            .typeString('unwind.')
            .start();
            
        }}
          
      />
      
      </div>
           <motion.div variants={childSlideVariant} className='flex gap-10 mt-5 md:mt-0'>
            <Link to = 'About us' smooth = {true} duration={800}><motion.button variants ={childSlideVariant} className='flex items-center justify-center text-base  rounded-2xl p-2 min-w-40 bg-white 
             cursor-pointer hover:bg-[#ffffffa2] font-semibold transition-colors duration-200 ease-in-out'>About</motion.button></Link>
            <Link to = 'Our work' smooth = {true} duration={800}><motion.button variants ={childSlideVariant} className = "flex items-center justify-center rounded-2xl p-2 min-w-40 bg-white text-base  cursor-pointer hover:bg-[#ffffffa2] font-semibold transition-colors duration-200 ease-in-out">
              Portfolio</motion.button>
              </Link>
              
              
           </motion.div>
         
        </motion.div>
</motion.div>
      </div>
      
    </div>
    </Element>
    
    

<div className='p-15 will-change-transform select-none'>

<motion.div variants={parentSlideVariant} initial = 'hidden' animate = {aboutView ? 'show' : 'hidden'} ref = {aboutRef}>
  <Element name = 'About us'>
    <AboutUs variants = {childSlideVariant}/>
    </Element>
</motion.div>

<motion.div variants={parentSlideVariant} initial = 'hidden' animate = {fillView ? 'show' : 'hidden'} ref = {fillRef}>
  <Element name = 'Partner With Us'>
    <Partherwithus variants = {childSlideVariant}/>
  </Element>
  </motion.div>

<motion.div variants={parentSlideVariant} initial = 'hidden' animate = {fill2View ? 'show' : 'hidden'} ref = {fill2Ref}>
  <Element name = 'Our work'>
    <Ourwork variants = {childSlideVariant}/>
  </Element>
 </motion.div>

  <motion.div variants={parentSlideVariant} initial = 'hidden' animate = {contactView ? 'show' : 'hidden'} ref = {contactRef}>
<Element name = 'Contact'>
  <Contact variants = {childSlideVariant}/>
</Element>
 </motion.div>
</div>

  </>
);
  
}

export default App

