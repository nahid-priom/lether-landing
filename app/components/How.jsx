"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const How = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Apply a generous amount of Leather CPR Cleaner to a clean, soft cloth or applicator pad.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Wipe",
      description: "Gently wipe the product onto the leather surface, working in small sections. You'll see dirt and grime lift away effortlessly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Buff",
      description: "For best results, allow the product to penetrate for a few minutes. Then, buff gently with a clean, dry cloth until the leather is soft and shiny.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gradient-to-b from-white to-gray-50"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Transform your leather in just three easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2 + 0.4, 1)}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 text-center group"
            >
              <div className="relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default How;