import yasisland2 from './assets/yasisland2.jpg'
import {motion, type Variants} from 'framer-motion'

export default function Ourwork ({variants}:{variants:Variants}) {
return(


<> 
<motion.div className="flex flex-col md:items-start items-center md:p-10 gap-5 mt-15" variants = {variants}>
<motion.h1 className="md:text-6xl text-5xl font-bold" variants = {variants}>Portfolio of Past Successes.</motion.h1>
<motion.p className="text-[1.25rem] max-w-400 w-full leading-8"variants = {variants}>Currently, we are successfully processing and delivering approximately <span className='font-bold'>45,000 m³ 
     of high-quality beach sand material </span> for a major project in <span className='font-bold'>Yas Area</span>,
     utilizing our own fleet of vehicles for efficient and timely transport. <span className='font-bold'>Loka’s services are fully customized</span> to meet each client’s specific project requirements, 
     ensuring precision and reliability throughout every stage of delivery. To date, we have completed 30% of the project on schedule, demonstrating our strong 
     commitment to quality, safety, and client satisfaction.
     Our ongoing progress reflects Loka’s capability to handle <span className='font-bold'>large-scale material supply operations</span> with consistency and professionalism. </motion.p>

<motion.img src = {yasisland2} className='md:w-full md:h-full sm:h-70 min-w-90 h-50 mt-7 mb-10 md:mb-0' variants = {variants}></motion.img>

</motion.div>


</>





 )







}