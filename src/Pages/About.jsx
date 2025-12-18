import { motion } from "framer-motion";
import { FaBirthdayCake, FaHeart, FaStar, FaUsers, FaAward, FaLeaf } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 py-12 px-4">
      {/* Hero Section */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <GiCakeSlice className="text-6xl text-pink-500" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <FaHeart className="text-xl text-red-500" />
              </motion.div>
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Sweet</span> Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where every dessert is crafted with passion, quality ingredients, and a touch of magic.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Baking Happiness Since 2010</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At CakeVilla, we believe that desserts are more than just sweet treats - they're 
              moments of joy, celebrations of life, and expressions of love. Our journey began 
              in a small home kitchen with a single dream: to spread happiness through 
              extraordinary desserts.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to honor that dream by using only the finest ingredients, 
              traditional baking methods, and innovative recipes that delight both the eyes 
              and the taste buds.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
                Visit Our Bakery
              </button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={floatingAnimation}
              className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="./images/cake20.jpg" 
                alt="Artisan Cake" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative floating elements */}
            <motion.div
              animate={rotateAnimation}
              className="absolute -top-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
            >
              <FaAward className="text-3xl text-yellow-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-4xl" />,
                title: "Passion",
                description: "Every creation is infused with love and dedication",
                color: "text-red-500",
                bgColor: "bg-red-50"
              },
              {
                icon: <FaLeaf className="text-4xl" />,
                title: "Quality",
                description: "Only the finest natural ingredients",
                color: "text-green-500",
                bgColor: "bg-green-50"
              },
              {
                icon: <FaUsers className="text-4xl" />,
                title: "Community",
                description: "Building sweet memories together",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`${value.bgColor} p-8 rounded-3xl shadow-lg`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`${value.color} mb-6`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-12 text-white mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "5K+", label: "Cakes Baked" },
              { number: "50+", label: "Dessert Varieties" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div className="text-5xl font-bold">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
   
  
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={floatingAnimation}
            className="mb-8"
          >
            <FaBirthdayCake className="text-6xl text-pink-500 mx-auto" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Taste the Magic?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit us today or order online to experience our sweet creations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Order Online
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        animate={rotateAnimation}
        className="fixed -left-20 top-1/4 w-40 h-40 bg-pink-100 rounded-full opacity-10 -z-10"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed right-10 bottom-20 w-20 h-20 bg-orange-100 rounded-full opacity-10 -z-10"
      />
    </div>
  );
}

export default About;