q
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRise } from "react-icons/ai"
import { BsPeopleFill, BsPersonFillCheck } from "react-icons/bs"
import { FaHandshake, FaLightbulb } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import { GiAchievement } from "react-icons/gi"
import { MdBubbleChart, MdDiversity1, MdOutlinePendingActions } from "react-icons/md"
import { PiNetworkFill } from "react-icons/pi"
import { RiHandCoinFill } from "react-icons/ri"
import {motion} from 'framer-motion'
import type { Variants } from "framer-motion"





export default function Partherwithus ({variants} : {variants:Variants}) {


const [collapseIndex, setCollapseIndex] = useState<number | null>(null)

const collpaseText = (index:number) => {
    setCollapseIndex(collapseIndex === index ? null : index)
}
const reasons = ["Credibility, work ethic, authenticity, andand reliability are at the core of our values.",
     "We produce top quality beach sand as peryour specification and requirements.",
    "Resourceful and cost accountable, we sourcesource and manufacture locally andinternationally for beach sand and backfillbackfill material.",
    "We offer on-site manufacturing andproduction options to help reduce costs and increase your profit margins.",
    "Expertise in the Middle East & GCC provides a strategic advantage.",
    "Established in-market relationships enhance our capabilities.", 
    "Our advice is not just insightful but also practical and actionable.",
    "We prioritize listening to our clients, understanding their needs.", 
    "Deep understanding of new technologies and emerging market opportunities.", 
    "A dynamic, experienced, and culturallydiverse team ensures a fun and energetic collaboration."]

const categories = ["Integrity", "Quality", "Resourcefullness", "Efficiency", "Expertise", "Networking", "Practicality", "Client-focus", "Innovation", "Diversity"]
const icons = [<FaHandshake/>, <FaCircleCheck/> , <RiHandCoinFill/>, <AiOutlineRise/>, 
<GiAchievement/>, <PiNetworkFill/>, <MdOutlinePendingActions/>, 
<BsPersonFillCheck/>, <FaLightbulb/>, <MdDiversity1/> ]

return (
<>
<motion.div className="flex items-center justify-center" variants = {variants}>
<motion.div className="flex xl:flex-row flex-col items-center gap-5 lg:gap-20 lg:justify-between xl:justify-around bg-linear-to-t from-[#222831] to-[#000000] 
lg:w-full lg:p-10 p-5 mt-10 min-w-90 
sm:min-w-160" variants = {variants}>
<motion.div className="flex flex-col items-center lg:gap-4 gap-5" variants = {variants}>
<h1 className="text-white text-[2.5rem] font-semibold">Partnering With Us</h1>
<BsPeopleFill className="text-white text-4xl"/>
</motion.div>
<motion.h2 className="w-full max-w-120 text-white text-[1.3rem] lg:text-[1.2rem] xl:max-w-120 leading-10 font-light" variants = {variants}>Partnering with a trusted sand company ensures a <span className="font-bold">consistent supply</span> of <span className="font-bold">high-quality, screened</span>,
     and <span className="font-bold">reliable sand</span> for construction, landscaping, or beach restoration projects. It saves time, reduces costs, 
     and guarantees material that meets industry standards.</motion.h2>
<motion.div className="flex flex-col gap-2 p-7" variants = {variants}>
<div className="flex flex-col items-center gap-1 mt-5">
<h1 className="text-white justify-center items-center gap-2 text-[1.35rem] flex font-bold">Why Choose Us As a Partner? <MdBubbleChart/></h1>
<p className="text-white font-light text-[0.9rem] mb-4">Here are 10 reasons why you should partner with us</p>
</div>

{categories.map((category,index) => 
<ul className="flex flex-col lg:items-start font-light p-1 text-white gap-3">
<li key = {index} className="flex items-center sm:justify-between justify-around gap-5 text-[1.1rem] border-b leading-10 cursor-pointer w-full sm:max-w-130 sm:min-w-130 xl:max-w-110 xl:min-w-110 select-none 
transition-all ease-in-out duration-200 hover:opacity-70 "
 onClick={() => collpaseText(index)}><p className="flex items-center gap-5">{icons[index]}{category}</p>
{collapseIndex === index ? <motion.span animate = {{rotate:180}} transition={{ease:'easeInOut', duration:0.3}} ><AiOutlineMinus className="transition-all ease-in-out duration-200 w-4 h-4"/></motion.span> : 
<motion.span animate = {{rotate:0}} transition={{ease:'easeInOut', duration:0.3}} ><AiOutlinePlus className="w-4 h-4"/></motion.span>}

</li>
<AnimatePresence initial={false}>
 {collapseIndex === index && (
<motion.div
     key="content"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
               
><p className="w-full max-w-130">{collapseIndex === index && reasons[index]}</p>
</motion.div>
)}
</AnimatePresence>
</ul>

)}
</motion.div>
</motion.div>






</motion.div>
</>)













}













