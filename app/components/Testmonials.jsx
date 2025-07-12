"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "I was amazed at how Leather CPR Cleaner & Conditioner revived my old leather couch! Paired with the Microfiber Applicator Sponge, it was so easy to apply evenly. The sponge's soft, lint-free pad glided smoothly, and my couch looks brand new without any sticky residue. It's perfect for my car seats too!",
      author: "Sarah P.",
      role: "Homeowner",
      stars: 5,
      product: "Cleaner & Sponge Combo"
    },
    {
      quote: "Leather CPR is my go-to for keeping my car seats pristine. The cleaner and conditioner work wonders, and the Microfiber Applicator Sponge makes application a breeze. Its round pad covers large areas quickly, leaving no scratches. My interior looks showroom-fresh, and I love how simple it is to use!",
      author: "Michelle Samsel",
      role: "Car Enthusiast",
      stars: 5,
      product: "Cleaner & Conditioner"
    },
    {
      quote: "As a handbag collector, I trust Leather CPR to care for my leather bags. The cleaner restores their shine, and the Microfiber Applicator Sponge ensures even application without wasting product. It's gentle on my purses and boots, keeping them looking pristine. This duo is a must-have!",
      author: "Emily R.",
      role: "Fashion Blogger",
      stars: 5,
      product: "Complete Leather Care Kit"
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gradient-to-b from-amber-50 to-white"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Customer Love
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              What Our Customers Are Saying
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Leather CPR products have earned rave reviews from leather care enthusiasts worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2 + 0.4, 1)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-amber-100 group relative"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-amber-400"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 relative pl-6">
                <svg 
                  className="absolute top-0 left-0 w-6 h-6 text-amber-300"
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-amber-600 font-medium mt-1">{testimonial.product}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;