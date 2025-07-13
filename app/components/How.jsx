"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const How = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description:
        "Apply a generous amount of Leather CPR Cleaner to a clean, soft cloth or applicator pad.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Wipe",
      description:
        "Gently wipe the product onto the leather surface, working in small sections. You'll see dirt and grime lift away effortlessly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Buff",
      description:
        "For best results, allow the product to penetrate for a few minutes (up to ten minutes for heavily soiled areas). Then, buff gently with a clean, dry cloth until the leather is soft and shiny.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gradient-to-b from-white to-amber-50"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple Steps to Beautiful Leather - No rinsing, no complicated
            steps. Just beautiful, revitalized leather.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2 + 0.4, 1)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-amber-100 text-center group relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <div className="text-amber-700">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="mt-16 text-center bg-amber-50 rounded-xl p-6 max-w-3xl mx-auto border border-amber-200"
        >
          <p className="text-amber-800 font-medium">
            "Transform your leather in just three easy steps - from dull and
            worn to soft and revitalized!"
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default How;
