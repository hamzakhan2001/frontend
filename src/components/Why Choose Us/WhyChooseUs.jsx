import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaBullhorn, FaRegLightbulb } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChartLine className="text-vibrantBlue text-4xl" />,
      title: "Data-Driven Strategies",
      description:
        "We create campaigns backed by analytics and insights to maximize ROI and conversions.",
    },
    {
      icon: <FaUsers className="text-vibrantBlue text-4xl" />,
      title: "Expert Team",
      description:
        "Our digital marketing experts bring years of experience in SEO, PPC, social media, and branding.",
    },
    {
      icon: <FaBullhorn className="text-vibrantBlue text-4xl" />,
      title: "Creative Campaigns",
      description:
        "We craft innovative campaigns that capture attention and strengthen your brand presence.",
    },
    {
      icon: <FaRegLightbulb className="text-vibrantBlue text-4xl" />,
      title: "Tailored Solutions",
      description:
        "No one-size-fits-all. We design strategies tailored to your business goals and target audience.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative bg-deepNavyBlue text-white p-30 sm:p-10 border-t border-gray-700 font-poppins lg:p-20"
    >
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
          className="h-1 bg-vibrantBlue rounded-full w-32 mx-auto mt-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-md max-w-3xl mx-auto text-white"
        >
          We don’t just market brands – we transform them. Here’s why businesses
          trust Hayzel Technologies for their digital growth.
        </motion.p>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
