/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && subject !== ''){
          alert('Thank you for reaching us!');
        }
      };
  return (
    <>
    <section className='overflow-x-hidden'>
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:py-20 lg:gap-x-44">
          {/* text */}
            <motion.div 
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col px-5 mx-5 py-32 text-center lg:px-8 lg:text-left ">
                <h1 className='text-[#1190A6] text-7xl font-semibold py-3'>Get in Touch</h1>
                <p className='text-[#004c9b] text-xl font-medium'>Let us know how we can help!</p>            
            </motion.div>

          {/* form  */}
            
          <motion.div 
           variants={fadeIn("left", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="block max-w-md w-full rounded-lg bg-transparent p-6 dark:bg-[#1190A6]">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6 px-1">
                <h1 className='font-semibold text-2xl text-white'>Let's Talk</h1>
              </div>
              {/* Name input */}
              <div className="relative mb-6">
                <input
                  value={name}
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none text-white  dark:placeholder:text-neutral-200"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
              </div>

        {/* Email input */}
        <div className="relative mb-6">
          <input
            value={email}
            type="email"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none text-white  dark:placeholder:text-neutral-200"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />        
        </div>

        {/* Message textarea */}
        <div className="relative mb-6">
            <textarea
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none text-white dark:placeholder:text-neutral-200 resize-none"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name='subject'
              rows="3"
              placeholder="What Would You Like to Discuss?"
              required
            >           
            </textarea>
        </div>
        
             {/* button  */}
             <div className="relative mb-6">
             <button
                type="submit"
                className="inline-block w-full rounded bg-white px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-[#1190A6] hover:bg-slate-600/40 lg:hover:text-white"
              >
                Send
              </button>
             </div>
          </form>  
          </motion.div>
        </div> 
      </div>
          
    </section>

    <section>
      <div className="container mx-auto py-24">
        <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-6xl font-semibold text-[#1190A6] text-center py-8">
              <h1 className='uppercase text-5xl md:text-6xl font-bold drop-shadow-md shadow-black-600/50 py-3'>Jade<span/>Tech</h1>
              <p className='text-lg leading-tight font-medium'>
                Jika Anda memiliki pertanyaan, saran, atau ingin bermitra dengan kami
                <p className='break-after-column py-1'>silahkan hubungi kami melalui informasi kontak pada laman ini.</p>
              </p>         
        </motion.div>

        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='max-w-lg mx-auto rounded-xl lg:max-w-[1400px] overflow-x-hidden flex flex-col h-[510px] lg:h-[350px] lg:flex-row  bg-[#1190A6]  '>
          
          <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col lg:h-[350px] '>
            <iframe
              className='rounded-xl lg:h-full lg:w-[650px] mx-5 py-5 lg:rounded-xl lg:mx-5 lg:py-5 '
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.57240383344!2d-122.3212843181106!3d37.40247298383319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sid!4v1685858186588!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'>
            </iframe>
          </motion.div>

           {/* alamat */}
           <motion.div 
           variants={fadeIn("left", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="lg:py-5 lg:w-[1300px] ">
            <div className="flex-col text-left px-5 mx-5 lg:text-left py-11 bg-slate-200 rounded-2xl ">
              <h1 className='text-5xl md:text-6xl font-semibold text-[#1190A6] py-3 drop-shadow-md shadow-black-600/50'>Address</h1>
                  <p className='text-lg font-medium text-[#004c9b] '>
                  Jalan Jade No. 123
                  <p>Kota Tangerang, Indonesia <span/> </p>
                  <p>Kode Pos: 12345</p>

                  <p>Telepon: +12-345-6789</p>
                  <p>Email: info@JadeTech.com</p>
                </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </>
  )
}

export default Contact