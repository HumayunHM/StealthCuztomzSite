"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
   return (
      <section id="about" className="bg-black text-white py-20 px-4 text-center">
         {/* Heading */}
         <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            <h2 className="text-5xl font-[Russo_One] text-center mb-24">
               Why Choose Us
            </h2>
         </motion.div>

         {/* 4-Item Grid */}
         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-lg font-[Audiowide]">
            {/* Item 1 */}
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 0.5 }}
            >
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">5+ Years Experience</p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 0.8 }}
            >
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Experienced Team</p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 1.1 }}
            >
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Fast Turnaround</p>
            </motion.div>

            {/* Item 4 */}
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 1.4 }}
            >
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Affordable Pricing</p>
            </motion.div>
         </div>
         <div className="flex justify-center items-center mt-24">
            <motion.a
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: 1.7, ease: "easeInOut" }}
               href="#contact"
               className="text-white text-xl font-[Russo_One] px-7 py-1 rounded-lg outline-1 outline-white outline-offset-2 hover:-translate-y-2 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
            >
               Get a Free Quote
            </motion.a>
         </div>
      </section>
   );
};

export default About;
