"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const WhyChoose = () => {
  const benefits = [
    {
      title: "2-in-1 Formula: Cleans & Conditions in One Easy Step",
      description: "Save time and money with our unique formula that effectively cleans away dirt and grime while deeply conditioning your leather. No need for separate products or complicated routines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Dermatologist Tested & 100% Cosmetic Ingredients",
      description: "Your family's safety is our priority. Leather CPR is the only leather care product made with 100% cosmetic skincare ingredients and is dermatologist tested, ensuring it won't irritate skin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Deep Moisturizing Cream, Not a Watery Spray",
      description: "Our rich cream formula penetrates deep into the leather, restoring its natural suppleness and prolonging its life. It effectively reduces the appearance of scuffs and scratches.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      )
    },
    {
      title: "No Sticky or Greasy Residue",
      description: "Unlike other products, Leather CPR dries quickly in minutes, leaving your leather feeling soft, smooth, and natural – never sticky or greasy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Versatile & Effective on Various Leather Types",
      description: "From furniture and car seats to handbags, jackets, boots, shoes, saddles, and even exotic leathers, Leather CPR is safe and effective on a wide range of leather items.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Family Made in the USA",
      description: "Proudly a family-made product, manufactured with care in the USA, ensuring the highest quality standards for over 25 years.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723L11.834 11H13a1 1 0 100-2h-.633l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z" clipRule="evenodd" />
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
      className="py-16 bg-gradient-to-b from-white to-amber-50"
      id="benefits"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Superior Leather Care
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              Why Choose
            </span> Leather CPR
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            More than just a cleaner - a complete leather care solution designed for superior results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1 + 0.4, 1)}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-amber-100 group"
            >
              <div className="text-amber-600 mb-4 group-hover:text-amber-800 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="mt-16 text-center"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 inline-block">
            <p className="text-amber-800 font-medium">
              "Featured on The Today Show and recommended by Restoration Hardware - trusted by millions for over 25 years"
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;