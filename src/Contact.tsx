import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import {motion} from 'framer-motion'
import {  MdMail, MdOutlineContactSupport } from "react-icons/md";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import type {Variants} from 'framer-motion'

export default function Contact({variants}:{variants:Variants}) {

const [field,setField] = useState<{firstname:string,lastname:string, phone:string, email:string,message:string}>({
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    message:'',
})

const handleField = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
setField(prev => ({...prev, [e.target.name]: e.target.value}))
}


const contactInfoCategories = ['Phone', 'Email','Address']
const contactIcons = [<FaPhoneAlt/>, <MdMail/>, <FaAddressCard/> ]
const contactInfo = ['+971-501006656', 'mo@lokacbc.com', 'Mohammed Bin Butti Al Hamed St, AlDanah, Abu Dhabi, United Arab Emirates']


return (
<>
<div className="flex items-center justify-center mt-20">
<motion.div className="lg:max-w-427 xl:w-full min-w-90 bg-linear-30 from-blue-300 to-orange-200 lg:p-15 p-3 overflow-auto" variants={variants}>
<div className="flex flex-col xl:flex-row items-start gap-20 xl:justify-around">
<div className="flex flex-col gap-3">
<div className="flex flex-col gap-3">
<h1 className="lg:text-[2.35rem] text-[1.2rem] sm:text-3xl font-semibold" >Prepared to create real impact for you.</h1>
<span className="lg:text-[1.25rem] sm:text-[1.1rem] text-base mb-10 flex items-center gap-2 font-normal">Contact Us<BiMessage className="w-3.5 h-3.5"/></span>
</div>

<div className="flex flex-col sm:flex-row gap-10 mb-10">
<input className='w-full sm:min-w-70 focus:outline-0 focus:border-b-2 focus:border-b-lime-300 placeholder:text-black text-[1.2rem]
 border-b leading-9 
  focus:placeholder:scale-65 focus:placeholder:-translate-y-3 
  focus:placeholder:-translate-x-11 focus:placeholder:opacity-60 focus:placeholder:transition-all duration-400' placeholder="First Name*" name = 'firstname' value = {field.firstname} onChange = {handleField} ></input>
<input className='w-full sm:min-w-70  focus:outline-0 focus:border-b-2 focus:border-b-lime-400 placeholder:text-black text-[1.2rem] border-b leading-9
 focus:placeholder:scale-65 focus:placeholder:-translate-y-3 focus:placeholder:-translate-x-11 focus:placeholder:opacity-60 focus:placeholder:transition-all duration-400
' placeholder="Last Name*" name = 'lastname' value = {field.lastname} onChange = {handleField} ></input>
</div>

<div className="flex flex-col sm:flex-row  gap-10">
<input className='w-full sm:min-w-70 focus:outline-0 focus:border-b-2 focus:border-b-lime-400 placeholder:text-black text-[1.2rem] border-b leading-9 focus:placeholder:scale-65 focus:placeholder:-translate-y-3 focus:placeholder:-translate-x-11 focus:placeholder:opacity-60 focus:placeholder:transition-all duration-400' placeholder="Phone*" name = 'phone' value = {field.phone} onChange = {handleField} ></input>
<input className='w-full sm:min-w-70 focus:outline-0 focus:border-b-2 focus:border-b-lime-400
 placeholder:text-black text-[1.2rem] border-b leading-9 focus:placeholder:scale-65 focus:placeholder:-translate-y-3
  focus:placeholder:-translate-x-11 focus:placeholder:opacity-60 focus:placeholder:transition-all duration-400' placeholder="Email Address*" name = 'email' value = {field.email} onChange = {handleField} ></input>
</div>

<textarea className='focus:outline-0 focus:border-b-2 focus:border-b-lime-400
 placeholder:text-black text-[1.2rem] border-b leading-8 focus:placeholder:scale-65 focus:placeholder:-translate-y-3
  focus:placeholder:-translate-x-26 focus:placeholder:opacity-60 focus:placeholder:transition-all duration-400 mt-10'  placeholder="Leave A Message..."
  name = 'message' value = {field.message} onChange = {handleField}>

  </textarea>
<motion.button className="flex items-center justify-center p-2.5 w-full bg-black text-white rounded-2xl cursor-pointer mt-10 text-base mb-10 lg:mb-0" whileHover={{scale:1.03, opacity:0.6}} whileTap={{scale:0.90}}>Submit</motion.button>


</div>


<div className="flex flex-col gap-8 items-center xl:items-start">
<div className="flex flex-col items-start">
<h1 className="text-[2.35rem] flex items-center justify-center gap-5 font-semibold">Contact info<MdOutlineContactSupport className="text-2xl"/></h1>
<h2 className="text-[1.4rem] font-normal mb-5">We’re only a click, call, or email away.</h2>
<p className="text-[1rem] max-w-90 w-full">Reach out by message, phone, or visit us in person — we’ll get back to you fast and with a smile.</p>
</div>
{contactInfoCategories.map((item,index) => 
<div key = {index} className="">
<p className="text-2xl flex items-center sm:justify-center xl:justify-start gap-3">{item}<span className="text-[0.9rem]">{contactIcons[index]}</span></p><span className="text-[1.2rem] font-light md:whitespace-nowrap lg:whitespace-normal">{contactInfo[index]}</span>
</div>
)}
</div>
</div>
</motion.div>
</div>
</>)









}