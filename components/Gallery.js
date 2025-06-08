"use client";

import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
   return (
      <section
         id="gallery"
         className= "bg-black text-white py-20 px-4 text-center"
      >
         {/* Heading */}
         <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            <h2 className="text-5xl font-[Russo_One] mb-16">
               Some of Our Projects
            </h2>
         </motion.div>

         {/* 4-Card Grid */}
         <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-6xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center text-lg font-[Audiowide]"
         >
            {/* Item 1 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Toyota Supra MK-4</p>
            </div>

            {/* Item 2 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Acura NSX NA1</p>
            </div>

            {/* Item 3 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Nissan Silvia S-15</p>
            </div>
         </motion.div>

         {/* Button */}
         <div className="flex justify-center items-center mt-24">
            <motion.a
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 0.8, ease: "easeInOut" }}
               href="#contact"
               className="text-white text-xl font-[Russo_One] px-7 py-1 rounded-lg outline-1 outline-white outline-offset-2 hover:-translate-y-2 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
            >
               Get a Free Quote
            </motion.a>
         </div>
      </section>
   );
};

export default Gallery;
