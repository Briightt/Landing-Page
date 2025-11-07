import {motion } from "framer-motion"
import logo from './assets/logo.png'
import {Link} from "react-scroll"

export default function Footer () {

    return (
    <>
<div className="flex justify-evenly gap-5 md:gap-30 grow md:flex-row flex-col xl:items-center bg-neutral-950 mt-20 w-full md:p-8 xl:p-10 p-5">
<div className="flex flex-col gap-5 md:gap-10 xl:gap-7 xl:p-20">
<h1 className="text-white text-4xl max-w-65">Prepeared to create real <span className="font-bold">impact</span> for you.</h1>
<img src = {logo} className="w-20 h-15 xl:w-15 xl:h-12 rounded-2xl bg-zinc-300"></img>
</div>
<div className="grid lg:grid-cols-3 grid-cols-2 text-white md:mt-0 mt-7  xl:gap-0 gap-10 justify-center items-start" >
<div className="flex flex-col items-start justify-start">
<h1 className="md:text-[1.1rem] text-base mb-3 opacity-60 ">Menu</h1>
{['Home', 'About us', 'Partner With Us', 'Our work', 'Contact'].map((item) => 
<Link to = {item} smooth = {true} duration={800}><motion.li className="list-none md:text-[1.25rem] text-[1.15rem] mb-1 cursor-pointer" whileHover={{scale:1.1, textDecoration:'underline', textUnderlineOffset:'5px'}} whileTap={{scale:0.985}}>{item}</motion.li></Link>
)}
</div>
<div className="flex flex-col items-start justify-start">
<h1 className="md:text-[1.1rem] text-base mb-3 opacity-60 ">Social</h1>
{['Facebook','Instagram', 'Twitter'].map((item) => 
<motion.li className="list-none md:text-[1.25rem] text-[1.15rem] mb-1 cursor-pointer" whileHover={{scale:1.1, textDecoration:'underline', textUnderlineOffset:'5px'}} whileTap={{scale:0.985}}>{item}</motion.li>
)}
</div>
<div className="flex flex-col items-start justify-start">
<h1 className="md:text-[1.1rem] text-base mb-3 opacity-60 ">Contact</h1>
{['+971-501006656','mo@lokacbc.com', 'Mohammed Bin Butti Al Hamed St', 'AlDanah, Abu Dhabi, UAE'].map((item) => 
<li className="list-none md:text-[1.25rem] text-[1.15rem] mb-1">{item}</li>
)}
</div>
</div>
</div>
<div className="flex justify-center items-start w-full bg-neutral-950 text-white p-4 ">
<div className="border-t border-t-[#ffffff4d] w-full  xl:w-9/12">
<p className="text-[0.8rem] opacity-60">©2025 LOKA - All right reserved</p>
</div>
</div>
</>
    )

}