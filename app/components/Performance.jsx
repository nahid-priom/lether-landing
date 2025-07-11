"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PerformanceInsights = () => {
  return (
    <section id="performance" className="relative py-4 lg:py-20 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
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
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              Exceptional Results
            </span>
            <br />
            Every Time
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Text + Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
              Our <span className="font-semibold text-amber-700">Leather CPR Cleaner</span> is engineered to deliver professional-grade restoration. 
              Using cosmetic-grade ingredients, it deeply nourishes while creating an invisible protective barrier.
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-amber-100 hover:shadow-md transition-all"
              >
                <span className="block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 mb-2">95%</span>
                <span className="text-gray-600 font-medium">Customer Satisfaction</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-amber-100 hover:shadow-md transition-all"
              >
                <span className="block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 mb-2">25+</span>
                <span className="text-gray-600 font-medium">Years of Trust</span>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-amber-600/30 transition-all"
            >
              Discover the Difference
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 inline-block ml-2 -mb-1"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column: Featured Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.pexels.com/photos/4452509/pexels-photo-4452509.jpeg"
                alt="Leather CPR Product in Action"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="text-center text-amber-800 font-medium">
                  "Brought my vintage leather couch back to life!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceInsights;