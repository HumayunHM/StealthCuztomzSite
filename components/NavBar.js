"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";

const NavBar = () => {
   return (
      <nav className="w-full shadow px-6 py-8">
         <div className="max-w-7xl mx-auto flex items-center justify-around">
            {/* Left: Logo */}
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.1 }}
            >
               <Image src={logo} width={150} height="auto" alt="logo" />
            </motion.div>

            {/* Middle: Navigation Links */}
            <div className="hidden md:flex space-x-10 text-white text-xl font-[Russo_One]">
               <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                  href="#home"
                  className="relative group text-white text-xl font-[Russo_One]"
               >
                  Home
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
               </motion.a>
               <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                  href="#about"
                  className="relative group text-white text-xl font-[Russo_One]"
               >
                  About
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
               </motion.a>
               <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                  href="#services"
                  className="relative group text-white text-xl font-[Russo_One]"
               >
                  Services
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
               </motion.a>
               <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                  href="#reviews"
                  className="relative group text-white text-xl font-[Russo_One]"
               >
                  Reviews
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
               </motion.a>
               <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                  href="#gallery"
                  className="relative group text-white text-xl font-[Russo_One]"
               >
                  Gallery
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
               </motion.a>
            </div>

            {/* Right: Contact Button */}
            <div className="flex justify-center items-center">
               <motion.a
                  href="#contact"
                  className="text-white text-lg font-[Russo_One] px-7 py-1 rounded-lg outline-1 outline-white outline-offset-2 hover:-translate-y-1 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.6 }}
               >
                  Contact
               </motion.a>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
