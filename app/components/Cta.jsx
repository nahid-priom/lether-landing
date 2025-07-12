"use client";
import { motion } from "framer-motion";

const CTA = () => {
 

  return (
    <div className="relative overflow-hidden">
     
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Leather?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8"
            >
              Don't let dull, dirty, or dry leather diminish the beauty of your home or accessories. Experience the revitalizing power of Leather CPR Cleaner today!
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-800 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              Order Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CTA;