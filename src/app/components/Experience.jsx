"use client";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion"; // import framer-motion

const Experience = () => {
  const experienceData = [
    {
      company: "Icicle Corporation",
      role: "Support & Digital Marketing Executive",
      description:
        "Provided technical support and assisted in developing and maintaining web-based applications, ensuring smooth operations and client satisfaction.",
      date: "April, 2021 - June, 2025",
      location: "Dhanmondi, Dhaka",
    },
    {
      company: "HealthOS ltd.",
      role: "Computer Operator",
      description:
        "Managed data entry and system operations while assisting in developing and maintaining web-based applications. Provided technical support to ensure smooth workflow, system efficiency, and client satisfaction.",
      date: "Sept, 2025 - Nov, 2025",
      location: "Mohammadpur, Dhaka",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-12 md:py-20 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 md:mb-16 text-indigo-400">
        EXPERIENCE
      </h2>

      {/* Desktop Timeline View */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-gray-700"></div>

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            {/* Left Side */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0 ? "justify-end pr-12 md:pr-20" : "justify-end pr-12 md:pr-20"
              }`}
            >
              {index % 2 === 0 ? (
                <div className="relative w-full max-w-lg">
                  <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md">
                    <h3 className="text-white text-xl font-bold mb-2">{item.company}</h3>
                    <p className="text-gray-300 text-base mb-4">{item.role}</p>
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      <p className="text-gray-400 text-sm">{item.location}</p>
                      <p className="text-gray-300 text-sm font-medium">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#1a1f2e]"></div>
                </div>
              ) : (
                <div className="flex items-center h-16">
                  <p className="text-gray-400 font-medium">{item.date}</p>
                </div>
              )}
            </div>

            {/* Center Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-white border-4 border-gray-700 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
              <Building2 size={20} className="md:size-6 text-gray-800" />
            </div>

            {/* Right Side */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0 ? "justify-start pl-12 md:pl-20" : "justify-start pl-12 md:pl-20"
              }`}
            >
              {index % 2 === 0 ? (
                <div className="flex items-center h-16">
                  <p className="text-gray-400 font-medium">{item.date}</p>
                </div>
              ) : (
                <div className="relative w-full max-w-lg">
                  <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md">
                    <h3 className="text-white text-xl font-bold mb-2">{item.company}</h3>
                    <p className="text-gray-300 text-base mb-4">{item.role}</p>
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      <p className="text-gray-400 text-sm">{item.location}</p>
                      <p className="text-gray-300 text-sm font-medium">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-[#1a1f2e]"></div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Single Column View */}
      <div className="lg:hidden max-w-4xl mx-auto px-4 md:px-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md w-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 bg-white border-4 border-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Building2 size={20} className="text-gray-800" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">{item.company}</h3>
                    <p className="text-gray-400 font-medium text-sm md:text-base">{item.date}</p>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mt-2">{item.role}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4 space-y-2">
                <p className="text-gray-400 text-sm">{item.location}</p>
                <p className="text-gray-300 text-sm font-medium">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
