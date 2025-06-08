import React from "react";

const Contact = () => {
   return (
      <section id="contact" className="bg-black text-white py-20 px-6 md:px-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Side */}
            <div>
               <h2 className="text-5xl font-[Russo_One] mb-10">Contact Us</h2>
               {/* Contact Info List */}
               <div className="space-y-6 text-lg font-[Audiowide]">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                     <svg
                        className="w-7 h-7 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                     >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                     </svg>
                     <span>
                        <a href="#home" className="relative group">
                           info@stealthcustomz.ca
                           <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
                        </a>
                     </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                     <svg
                        className="w-7 h-7 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                     >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                     </svg>
                     <span>
                        <a href="#home" className="relative group">
                           250 555 0199
                           <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
                        </a>
                     </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                     <svg
                        className="w-7 h-7 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                     >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                     </svg>
                     <span>
                        <a href="#home" className="relative group">
                           2695 Bd Pitfield, Saint-Laurent Quebec H4S 1T2
                           <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
                        </a>
                     </span>
                  </div>
               </div>

               {/* Socials */}
               <div className="flex items-center gap-6 mt-8">
                  {/* Facebook Icon */}
                  <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 scale-120 transition-colors duration-300"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-facebook-icon"
                  >
                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
               </a>

               {/* Instagram Icon */}
               <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 scale-120 transition-colors duration-300"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-instagram-icon"
                  >
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
               </a>
                  </div>


               {/* Gray Rounded Box */}
               <div className="w-5/6 h-48 bg-[#D9D9D9] rounded-xl mt-16" />
            </div>

            {/* Right Side Form */}
            <div>
               <form className="space-y-8 font-[Audiowide]">
                  {/* First Name */}
                  <div>
                     <label className="block text-left mb-2">First Name</label>
                     <input
                        type="text"
                        className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                     />
                  </div>

                  {/* Last Name */}
                  <div>
                     <label className="block text-left mb-2">Last Name</label>
                     <input
                        type="text"
                        className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                     />
                  </div>

                  {/* Email */}
                  <div>
                     <label className="block text-left mb-2">Email</label>
                     <input
                        type="email"
                        className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                     />
                  </div>

                  {/* Message */}
                  <div>
                     <label className="block text-left mb-2">Message</label>
                     <textarea
                        rows="4"
                        className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-14">
                     <button
                        type="submit"
                        className="text-white text-lg px-7 py-1 rounded-lg outline-1 outline-white outline-offset-2 hover:cursor-pointer hover:-translate-y-1 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
