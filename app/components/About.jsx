"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../public/about.jpeg";

const AboutLeatherCPR = () => {
    const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
     
    }
  };
  return (
    <section id="leather-cpr" className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              About Leather CPR
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column: Text - order changes on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-gray-700">
              At <span className="font-semibold text-amber-700">Leather CPR</span>, we believe in restoring the beauty and extending the life of your cherished leather possessions. For over 25 years, our superior formula has been trusted by millions to clean, condition, restore, and protect a wide variety of leather items.
            </p>

            <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-gray-700">
              We are committed to providing a safe and effective solution that brings your leather back to life, making it soft, supple, and looking its best. Our mission is simple: to help you easily maintain and revitalize your leather, ensuring it stands the test of time.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8 md:mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Trusted formula developed over 25 years of experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Safe for all types of leather including furniture, car seats, and clothing</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Restores and protects your valuable leather investments</p>
              </motion.div>
            </div>

            <motion.button
             onClick={() => handleNavClick("how-it-works")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-xl text-base md:text-lg shadow-lg hover:shadow-amber-600/30 transition-all text-center"
            >
              Learn More About Our Formula
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 md:h-5 md:w-5 inline-block ml-2 -mb-0.5"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column: Featured Image - order changes on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-3xl aspect-[5/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group">
              <Image
                src={aboutImg}
                alt="Bring Your Leather Back to Life!"
                fill
                className="object-fill group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeatherCPR;