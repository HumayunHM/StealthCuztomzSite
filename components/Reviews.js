import React from "react";

const Reviews = () => {
   const testimonials = [
      "Amazing service!",
      "My car looks brand new!",
      "Highly recommend these guys.",
      "Best wraps in town.",
      "Fast and professional.",
   ];

   // Duplicate for fake loop
   const looped = [...testimonials, ...testimonials];

   return (
      <section className="bg-black text-white py-20 px-4 text-center overflow-hidden">
         <h2 className="text-5xl font-[Russo_One] mb-16">
            What our Customers Say
         </h2>

         <div className="relative w-full overflow-hidden">
            <div className="flex gap-20 animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
               {looped.map((text, index) => (
                  <div
                     key={index}
                     className="bg-[#D9D9D9] text-black flex items-center justify-center 
                         rounded-xl w-[364px] h-[89px] shrink-0 text-sm font-semibold"
                  >
                     "{text}"
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Reviews;
