"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Leather CPR Cleaner",
    description: "All-in-one cleaner & conditioner for all leather types.",
    highlight: "Bestseller",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
  {
    name: "Leather Protection Spray",
    description: "UV shield to prevent fading and cracking.",
    highlight: "New Arrival",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
  {
    name: "Deluxe Care Bundle",
    description: "Complete leather care solution with premium accessories.",
    highlight: "Most Popular",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
  {
    name: "Leather Quick Wipes",
    description: "On-the-go cleaning for cars, bags & jackets.",
    highlight: "Travel Essential",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
  {
    name: "Premium Leather Brush",
    description: "Gentle bristles for deep cleaning without scratches.",
    highlight: "Professional Grade",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
  {
    name: "Luxury Gift Set",
    description: "Perfect present for leather enthusiasts.",
    highlight: "Limited Edition",
    image: "https://www.leatherworldonline.net/cdn/shop/products/024A7394.jpg?v=1615197798&width=533",
  },
];

const ProductGrid = () => {
  return (
    <section id="products"  className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
              Professional-Grade
            </span>{" "}
            Leather Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of leather care essentials
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-all duration-300 group"
            >
              {/* Product Image with Floating Badge */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                {product.highlight && (
                  <motion.span 
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-5 right-5 bg-white text-amber-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-amber-100"
                  >
                    {product.highlight}
                  </motion.span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-6 min-h-[4rem]">{product.description}</p>
                <motion.button
                  whileHover={{ 
                    backgroundColor: "#b45309", // darker amber-700
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Check Price & Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;