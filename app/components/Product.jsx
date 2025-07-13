"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";

const products = [
  {
    name: "Leather CPR Cleaner & Conditioner 18oz",
    shortDescription: "All-in-one solution for all leather types",
    fullDescription:
      "Keep your leather looking its best with Leather CPR Cleaner & Conditioner! This all-in-one solution cleans, restores, and protects everything from your favorite leather couch to handbags, car seats, jackets, and boots. Its gentle formula is safe for all types of leather, making it perfect for quick touch-ups or regular care. Just apply, wipe, and watch your leather stay soft, clean, and protected from dirt and scratches. Whether it's your sofa, shoes, or saddle, Leather CPR makes leather care easy and keeps your items looking like new!",
    highlight: "Bestseller",
    image: p1,
    amazonUrl: "https://www.amazon.com/dp/B00GRT125A?",
  },
  {
    name: "Leather CPR Cleaner and Conditioner Kit",
    shortDescription: "Complete cleaning & conditioning duo",
    fullDescription:
      "Keep your favorite leather items looking brand new with the Leather CPR Cleaner and Conditioner Kit! This 18oz cleaner and 22oz heavy-duty formula work together to gently clean and hydrate leather furniture, car seats, purses, shoes, jackets, and saddles. Made with safe, cosmetic-grade ingredients, it's tough on dirt but gentle on your leather and skin. Simply apply and wipe to restore softness and shine, whether you're refreshing a leather sofa, polishing boots, or caring for a cherished handbag.",
    highlight: "Most Popular",
    image: p2,
    amazonUrl: "https://www.amazon.com/dp/B0DCLSP981?",
  },
  {
    name: "Leather CPR Microfiber Applicator Sponge",
    shortDescription: "Perfect tool for leather care application",
    fullDescription:
      "Make leather care a breeze with the Leather CPR Microfiber Applicator Sponge! This 5-inch round, lint-free microfiber pad is your go-to for applying leather cleaners and conditioners smoothly on car seats, furniture, purses, and more. Its soft, scratch-free design ensures your leather stays pristine while covering large surfaces quickly and evenly. With a handy finger pocket for better grip, it's easy to use and clean, plus it's washable and reusable for long-lasting value. Perfect for anyone who loves keeping their leather looking flawless!",
    highlight: "Essential Tool",
    image: p3,
    amazonUrl: "https://www.amazon.com/dp/B0B9ZP4S4B?",
  },
];

const ProductGrid = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Eye-catching Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Premium Leather Care
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              Our Best
            </span>{" "}
            Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional solutions to restore and protect your leather items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-all duration-300 group flex flex-col"
            >
              {/* Product Image with Floating Badge */}
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-10 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                {product.highlight && (
                  <motion.span
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-1 right-0 bg-white text-amber-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-amber-100"
                  >
                    {product.highlight}
                  </motion.span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {product.name}
                </h3>

                <div className="mb-4 flex-grow">
                  <p className="text-gray-600 mb-2">
                    {expandedDescriptions[index]
                      ? product.fullDescription
                      : product.shortDescription}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-amber-600 hover:text-amber-800 text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:rounded-sm"
                  >
                    {expandedDescriptions[index] ? (
                      <>
                        Read Less
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                <motion.a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    backgroundColor: "#b45309",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 mt-auto"
                >
                  
                  Check Price
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
