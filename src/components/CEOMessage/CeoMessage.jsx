import React from "react";
import { motion } from "framer-motion";
import ceoImage from "../../assets/ceo.jpg"; // replace with your image path

const CeoMessage = () => {
  return (
    <section className="relative w-full p-30 sm:p-20 bg-white font-poppins">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-18"
        >
          <h2 className="text-2xl font-poppins sm:text-4xl md:text-5xl font-extrabold text-vibrantBlue">
            CEO's Message
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
            className="h-1 bg-vibrantBlue rounded-full w-full sm:w-24 md:w-32 mx-auto mt-4"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around gap-20 max-w-6xl mx-auto px-4">
        
        {/* CEO Image with Rotating Border */}
       <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0 lg:mr-12"
        >
          {/* Container for image and rotating border */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 2 }}
            >
              <div
                className="w-80 h-80 border-4 border-vibrantBlue border-opacity-80 rounded-full"
                style={{
                  borderStyle: "solid",
                  borderTopColor: "#4CC0D9",
                  borderRightColor: "transparent",
                  borderBottomColor: "transparent",
                  borderLeftColor: "transparent",
                }}
              />
            </motion.div>
            {/* CEO Image */}
            <img
              src={ceoImage}
              alt="CEO"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white z-10"
            />
          </div>
        </motion.div>
        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-left max-w-xl"
        >
          <p className="text-xl font-lato text-deepNavyBlue mb-4">
            In today's digital world, a strong online presence is essential. At{" "}
            <span className="font-semibold text-vibrantBlue">Hayzel</span>,
            we're dedicated to empowering businesses like yours to thrive. We
            understand the complexities of the digital landscape and provide
            tailored, results-driven strategies to help you achieve your goals.
            Our team is passionate about delivering innovative solutions in SEO,
            PPC, social media marketing, content creation, and website
            development. We believe in building strong partnerships with our
            clients, prioritizing transparency and delivering measurable
            results. We're here to help you navigate the digital world and
            unlock your business's full potential. Let's grow together.
          </p>
          <p className="text-vibrantBlue font-bold text-xl">
            — Huzaifa Wali, CEO
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CeoMessage;
