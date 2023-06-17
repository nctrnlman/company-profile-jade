import React from "react";
import Image from "../assets/3d-home-vector.png"
import Image1 from "../assets/skyscraper.jpeg"
import Image2 from "../assets/foto_led.jpg"
import Image3 from "../assets/foto_jes.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


function Home() {
  return (
    <>
   <section className="h-[700px] flex items-center overflow-x-hidden bg-[#1190A6]">
  <div 
  
  className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center lg:gap-y-8 lg:gap-x-56">
      {/*text */}
      <div className="flex flex-col px-5 mx-5 text-center lg:text-left gap-y-3">
        <motion.h1 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-6xl md:text-7xl font-bold drop-shadow-md shadow-black-600/50 text-white">
          Jade <span>Technology</span>
        </motion.h1>

        <motion.p 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[#004c9b] text-2xl font-semibold">Empowering Your Digital Transformation</motion.p>
      </div>
      {/*image */}
      <motion.div 
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="hidden lg:flex">
        <img className="lg:h-96 lg:w-full" src={Image} alt=""/>
      </motion.div>
    </div>
  </div>
</section>

    <section className="py-16 overflow-hidden">
      <div className="container mx-auto ">
        
          {/*card*/}
          <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-lg mx-auto bg-[#1190A6] rounded-xl drop-shadow-lg lg:max-w-7xl">
          
        <div className="lg:flex">
          {/*image */}
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:shrink-0 ">
            <img className="h-80 w-full object-cover lg:h-full lg:w-80 rounded-xl" src={Image1} alt=""/> 
          </motion.div>

              <div className="p-6 lg:p-16">
                {/*visi */}
                <motion.div 
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="tracking-tight text-justify lg:text-justify">
                  <h1 className="block mt-1 text-3xl leading-tight font-semibold text-white">Visi</h1>
                  <p className="mt-2 text-white">Visi kami di Jade Tech adalah menjadi mitra pilihan yang unggul dalam menyediakan layanan teknologi informasi (IT) 
                    kepada pelanggan kami. Kami berkomitmen untuk memberikan solusi IT yang inovatif, handal, dan efektif 
                    guna membantu pelanggan kami mencapai keunggulan kompetitif dalam era digital.</p>
                </motion.div>
                

                {/* misi */}
                <motion.div 
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="tracking-tight text-justify lg:text-justify py-8">
                  <h1 className="block mt-1 text-3xl leading-tight font-semibold text-white">Misi</h1>
                  <p className="mt-2 text-white">Memberikan Solusi Teknologi yang Inovatif: 
                    Kami berkomitmen untuk menyediakan solusi teknologi informasi (IT) yang inovatif dan terkini kepada pelanggan kami. 
                    Kami akan terus mengikuti perkembangan teknologi dan mencari cara baru untuk menghadirkan solusi yang memberikan
                    nilai tambah kepada bisnis pelanggan kami.</p>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      
    </section>

    <section className="overflow-x-hidden">
  <div className="container mx-auto ">
    <motion.div 
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="text-center py-5">
      <h1 className="uppercase text-6xl font-semibold text-[#1190A6]">our team</h1>
    </motion.div>

    <div className="flex flex-wrap lg:flex lg:flex-wrap justify-center lg:px-3 lg:gap-x-11 lg:overflow-x-hidden">
      {/* our team ava khaled */}
      <motion.div 
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center py-8 bg-white">
        <img src={Image2} className="mx-auto mb-4 w-72 rounded-lg lg:w-auto lg:mb-4 max-w-xs transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40" alt=""/>
          <div className="py-5">
            <h5 className="font-bold text-gray-700 text-3xl leading-7 mb-1">Khaled Makkawirelang</h5>
            <p className="text-2xl font-semibold text-[#1190A6]">Front End Developer</p>
          </div>
      </motion.div>

      {/* our team ava ajes*/}
      <motion.div 
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center py-8 bg-white">
        <img src={Image3} className="mx-auto mb-4 w-72 rounded-lg lg:w-auto lg:mb-4 max-w-xs transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40" alt="" />
          <div className="py-5">
            <h5 className="font-bold text-gray-700 text-3xl leading-7 mb-1">Rhazes Devino Alhambra</h5>
            <p className="text-2xl font-semibold text-[#1190A6]">Back End Developer</p>
          </div>
      </motion.div>
    </div>
  </div>
</section>

    </>
    
    
    
  );
}

export default Home;
