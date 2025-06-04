import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import LBWORKS from "../assets/images/LBWORKS.jpg";
import Image from "next/image";
import Reviews from "@/components/Reviews";

export default function Home() {
   return (
      <>
         <section className="relative h-screen w-full overflow-hidden">
            {/* Next.js optimized image as background */}
            <Image
               src={LBWORKS}
               alt="hero background"
               fill
               className="object-cover z-0"
               priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/0 z-10" />

            {/* Content */}
            <div className="relative z-20">
               <NavBar />
               <Banner />
            </div>
         </section>
         <About />
         <Services />
         <Reviews />
         <Gallery />
         <Contact />
         <Footer />
      </>
   );
}
