import {easeInOut, motion} from 'framer-motion'
import { LuConstruction } from 'react-icons/lu'
import { MdBeachAccess } from 'react-icons/md'
import ourapproach from './assets/ourapproach.jpg'
import { IoConstruct} from 'react-icons/io5'
import material1 from './assets/material1.jpg'
import material2 from './assets/material2.jpg'
import material3 from './assets/material3.jpg'
import transport1 from './assets/transport1.jpg'
import transport2 from './assets/transport2.jpg'
import transport3 from './assets/transport3.png'
import transport4 from './assets/transport4.jpg'
import { useState } from 'react'
import { BsCursor } from 'react-icons/bs'
import { FaFontAwesomeFlag } from 'react-icons/fa'
import type { Variants } from "framer-motion";





export default function AboutUs ({variants} : {variants:Variants}) {

    const images = [transport1,transport2,transport3,transport4]


const manfactureObj: {img:string, type:string,text:string}[] = ([
{img: material1, type: 'Beach Sand', text:'Premium, clean, natural sand perfect for creating beautiful beaches, resorts, and recreational areas.'},
{img: material2, type: 'Backfill Material', text:'High-quality fill material designed for construction, landscaping, and foundation stability.'},
{img: material3, type: 'Gatch', text:'Durable, well-graded aggregate ideal for concrete work, paving, and structural projects.'},
]
    
)


const machineryObj: {number:string, description:string, img:string}[] = ([
{number: '01', description: 'Portable / Mobile Processing Plants',  img:transport1},
{number: '02', description: 'Conveyors / Hoppers / Truck Unloaders' ,img:transport2},
{number: '03', description: 'Wheel / Bucket‑Wheel Excavator / Loader for Sand Mines', img:transport3},
{number: '04', description: 'Crushers, Screens, Feeders & Conveyors', img:transport4}
]
)

const [hoverIndex,setHoverIndex] = useState<number | null>(0)
const [clickIndex,setClickIndex] = useState<number>(0)

const onHover = (index:number): void => {
setHoverIndex(index)


}

const onButtonClick = (index:number): void => {
  setClickIndex(index)
  setHoverIndex(null)
}




const hoverVariants = {
  rest: { x: 0, scale: 1 },
  hover: { x: 0, scale: 1.05, transition: { ease: easeInOut} },
};

const textVariants = {
  rest: { opacity: 0.65, scale: 1,},
  hover: { opacity: 1, scale: 1.05,  transition:{type:"spring" as const, stiffness: 300, damping:30}},
};



const engineeringObj: {number:string, description:string}[] = ([
{number: '01', description: 'We have three ready Sandco Machines with four more machines currently being developed and manufactured by us here in the UAE.'},
{number: '02', description: 'Each machine is capable of producing 2000m³ of beach sand sand per day and can produce to our to our clients desired specifications. specifications.' },
{number: '03', description: 'We can mobilise our equipment equipment to your site to provide the quickest and most most cost-effective beach sand sand manufacturing solution in solution in the market today'},
{number: '04', description: 'We can deliver our beach sand sand from our site to your project in the most efficient way way by either barge or truck.' }
]
)

const enginneringColors = ['D6A99D','FBF3D5','D6DAC8','9CAFAA']



return (
<>
<motion.div variants={variants}>
<div className='flex flex-col items-start lg:mx-10 mt-10 lg:p-5 '>
<FaFontAwesomeFlag className='lg:w-6 lg:h-6 lg:ml-1 w-5 h-5'/>
<h1 className='font-bold lg:text-5xl text-3xl mb-5'>At Loka, our distinctiveness is our USP,</h1>
<p className='lg:text-[1.25rem] text-base w-full max-w-220 leading-8'>In Loka we don’t simply copy the old school of producing, sourcing, and consulting, taking your inquiry through a complete process ensuring you complete your
your project with professionalism, top quality, on-time and always with
the best price.
</p>
</div>
</motion.div>

<motion.div className="grid grid-rows-1 [grid-template-areas:'image'] mt-20 justify-center" variants={variants}>
<img src = {ourapproach} className='sm:w-full min-w-90 lg:w-455 h-140 lg:h-130 object-cover [grid-area:image]'></img>
<motion.div className='flex md:flex-row flex-col gap-7 mt-8 text-[#333333] p-5 justify-around [grid-area:image]' variants={variants}>
<div className='flex items-center mb-5'>
<h1 className='lg:text-4xl text-3xl font-semibold text-white'>Our Approach</h1>
</div>
<div className='flex items-center mb-5'>
    <p className='w-full lg:max-w-280 text-white lg:text-2xl text-[1.1rem] leading-9 font-light'>LOKA aims to produce and develop state of the art luxuries beach sand through
intensive research and development to not only matches the client’s need but
exceeds it.
Our mission is to craft breathtaking beachfront escapes and waterfront residences that let people truly connect with the sea. We create spaces designed for relaxation, inspiration, and moments that leave a lasting sense of peace and wonder. </p>
</div>
</motion.div>
</motion.div>

<motion.div className='flex flex-col xl:items-end items-center lg:mx-10 mt-10 lg:p-5' variants={variants}>
<IoConstruct className='lg:w-6 lg:h-6 w-5 h-5'/>
<h1 className='font-bold lg:text-5xl text-3xl lg:leading-15 mb-2 lg:mb-0'>What we can Source & Manufacture</h1>
<span className='font-semibold mb-3'>“If you cannot find it or manufacture it… LOKA Will”
</span>
<p className='lg:text-[1.25rem] text-[1.1rem] w-full max-w-203 leading-8'>Our team are experts in finding and manufacturing the goods
you need from source to end-product and will make sure that you receive it on
time everytime.
</p>
</motion.div>



<motion.div className='flex xl:flex-row flex-col gap-7 mt-8 text-[#333333] p-5 justify-around' variants={variants}>
{manfactureObj.map((item , index:number) => 
<div key = {index} className='flex flex-col items-center justify-center gap-4' >
<img src = {item.img} className='md:w-110 md:h-95 min-w-90 h-85 rounded-2xl'></img>
<h1 className='font-semibold text-2xl'>{item.type}</h1>
<p className='w-full max-w-65'>{item.text}</p>
</div>

)}

</motion.div>

<motion.div className='flex xl:flex-row flex-col mt-20 lg:p-5 sm:p-3 lg:gap-20 xl:gap-0 items-center lg:justify-between xl:justify-around' variants={variants}>
<div className='flex flex-col '>
<LuConstruction className='w-6 h-6'/>
<h1 className='font-bold text-5xl mb-3'>Our Methods & Machinery</h1>
<span className='mb-10 font-semibold'>Hover over each text to see the images of the machinery <BsCursor/></span>
{machineryObj.map((item,index) => 
<motion.div key = {index} className='flex gap-5 cursor-pointer py-5' 
 >
<motion.div className='flex flex-col'  variants={hoverVariants} initial = 'rest' animate = "rest" whileHover='hover' style={{ transformOrigin: "left center",  willChange: "transform" }}>
<motion.p className='text-[1.3rem] text-[#00000054]' >{item.number}</motion.p>
<motion.span className={`lg:text-2xl sm:text-[1.2rem] text-[1.1rem]`} initial = 'rest' whileHover='hover' animate = 'rest' variants={textVariants} onMouseEnter={() => onHover(index)}
 key = 'content' style={{ transformOrigin: "left center",  willChange: "transform" }} >{item.description}</motion.span>
</motion.div>
</motion.div>
)}
</div>
<motion.div className='flex flex-col items-center' variants={variants}>
<img src = {machineryObj[hoverIndex ?? clickIndex].img} className='lg:max-w-190 lg:h-150 sm:max-w-190 sm:h-100 min-w-90 h-60 rounded-2xl mb-3 mt-3 lg:mt-0'></img>
<div className='flex gap-3'>
{images.map((item,index) => 
<motion.img src = {item} key = {index} className='w-20 cursor-pointer' onClick = {() => onButtonClick(index)} whileHover={{scale:1.1}} transition={{ease:'easeInOut', duration:0.1}}></motion.img>
)}
</div>
</motion.div>
</motion.div>

<motion.div className='flex flex-col md:items-center lg:mx-10 mt-20 lg:p-5' variants={variants}>
<MdBeachAccess className='lg:w-6 lg:h-6 h-5 w-5 mr-7 lg:mr-0 '/>
<h1 className='font-bold lg:text-5xl text-3xl lg:leading-15 mb-7'>Engineering Our Beach Sand For You</h1>
<p className='lg:text-[1.25rem] text-[1.1rem] w-full md:max-w-130 lg:max-w-170 min-w-70 leading-8'>High-quality, clean, and well-graded sand used in construction projects for concrete, plastering, 
    and road work. Ideal for structural applications due to its strength and consistency.
</p>
</motion.div>

<motion.div variants={variants} className='flex xl:flex-row flex-col mt-8 text-[#333333] md:p-6 lg:justify-around gap-5 lg:gap-3 items-center'>
{engineeringObj.map((item, index) => 
<motion.div className={`w-full max-w-100 sm:max-w-150 xl:min-h-100 xl:max-w-100 font-mono flex flex-col rounded-2xl p-5`} style = {{backgroundColor: `#${enginneringColors[index]}`}} whileHover={{scale:1.05}} transition={{type:'spring', stiffness:300}}>
<h1 className='text-3xl'>{item.number}</h1>
<p className='text-[1.1rem] leading-9'>{item.description}</p>
</motion.div>
)}
</motion.div>










</>)












}


