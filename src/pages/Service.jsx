import React from "react";
import Image from "../assets/ervice.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image3 from '../assets/hand_3d.png'

function Service() {
  return (
    <>
    <section className="min-h-[85vh] lg:min-h-[90vh] h-[700px] flex items-center overflow-x-hidden bg-[#1190A6]">
      <div className="container justify-between flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
        {/*text */}
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col px-5 mx-5 text-center lg:text-left gap-y-3">
          <h1 className="text-[76px] font-bold leading-[1] lg:text[100px] text-white">
            Our <span> Specialty </span>{" "}
          </h1>
          <motion.p
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#004c9b] text-[31px] font-semibold">
          Supporting your company with all it's digital needs.
          </motion.p>
        </motion.div>

        {/*image */}
        <motion.div 
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden px-[15px] lg:flex flex-1 max-w-[300px] lg:max-w-[600px]">
          <img className="w-full h-full" src={Image} alt="" />
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto">
        {/* text */}
      <motion.div 
      variants={fadeIn("fade", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="text-6xl font-semibold text-[#1190A6] text-center py-8">
          <h1>What exactly can we offer to you</h1>
      </motion.div>

        {/* card */}
        
        <div className=" px-2 flex flex-col lg:flex lg:flex-row overflow-hidden max-w-lg lg:h-[350px] mx-auto lg:mx-5 h-[1000px] items-center rounded-xl bg-[#1190A6] lg:max-w-full py-12 lg:py-12">
          <div className="bg-slate-200 h-[250px] w-[250px] mx-5 px-5 border-2
          border-y-blue-900 border-x-blue-800 rounded-xl py-4">
            <h1 className="py-2 font-semibold text-lg text-[#004c9b]"> Website <span/> Design </h1>
            <div className="text-sm">
            <p> We don't build the most beautiful websites in the world. </p>
            <p>We build websites that convert.</p>  
            </div>
          </div>
        
        {/* card 2 */}
        <div className="py-2">
          <div className="bg-slate-200 h-[250px] w-[250px] mx-5 px-5 border-2
          border-y-blue-900 border-x-blue-800 rounded-xl py-4">
            <h1 className="py-2 font-semibold text-lg text-[#004c9b]"> Web <span/> Development </h1>
           <div className="text-sm">
            <p>In the dynamic digital landscape, web development plays a pivotal role in shaping businesses' online presence. </p>  
            </div> 
          </div>
          </div>

          {/* img */}
          <div className="flex">
            <img src={Image3} alt=""/>
          </div>


          {/* card 3 */}
         
          <div className="bg-slate-200 h-[250px] w-[250px] mx-5 px-5 border-2
          border-y-blue-900 border-x-blue-800 rounded-xl py-4 ">
            <h1 className="py-2 font-semibold text-lg text-[#004c9b]"> Mobile <span/> Design </h1>
            {/* div p */}
            <div className="text-sm">
              <p> In the mobile-centric world we live in, having a captivating mobile design is essential.</p> 
            </div>

          </div>
          {/* card 4 */}
          <div className="py-2">
          <div className="bg-slate-200 h-[250px] w-[250px] mx-5 px-5 border-2
          border-y-blue-900 border-x-blue-800 rounded-xl py-4">
            <h1 className="py-2 font-semibold text-lg text-[#004c9b]"> Mobile <span/> Development </h1>
            {/* div p */}
            <div className="text-sm">
              <p> We excel in mobile development, harnessing the power of cutting-edge technologies to create innovative and user-centric mobile applications. </p> 
            </div>
            </div>
          </div>
          
         
          
         
        </div>
        

      </div>
    </section>
    </>
  );
}

export default Service;
