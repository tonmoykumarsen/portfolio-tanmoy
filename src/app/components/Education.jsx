"use client";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "B.SC Engineering",
      degree: "Department of Computer Science & Engineering (CSE)",
      institution: "Dhaka International University",
      location: "Satarkul Rd, Dhaka 1212",
      result: "CGPA: Not Published",
      date: "January 2022 - Running",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      degree: "Major in Science",
      institution: "Hazi Wahed Moriom College",
      location: "Sirajganj-Bogra Hwy, Sirajganj, Bangladesh",
      result: "GPA: 5.00 out of 5.00",
      date: "March 2018 - Aug 2020",
    },
    {
      title: "Secondary School Certificate (SSC)",
      degree: "Major in Science",
      institution: "Raiganj Pilot High School",
      location: "Raigonj,Sirajganj, Bangladesh",
      result: "GPA: 5.00 out of 5.00",
      date: "Jan 2016 - July 2018",
    },
  ];

  return (
    <section id="education" className="py-12 md:py-20 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 md:mb-16 text-indigo-400">
        EDUCATION
      </h2>

      {/* Desktop Timeline View */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Vertical line in the center */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-gray-700"></div>

        {educationData.map((item, index) => (
          <div key={index} className="relative flex items-center mb-24">
            {/* Left Side */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0 ? "justify-end pr-12 md:pr-20" : "justify-end pr-12 md:pr-20"
              }`}
            >
              {index % 2 === 0 ? (
                // Card on left
                <div className="relative w-full max-w-lg">
                  <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base mb-4">
                      {item.degree}
                    </p>
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      <p className="text-gray-300 text-sm font-medium">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-sm">{item.location}</p>
                      <p className="text-gray-300 text-sm font-medium">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  {/* Arrow pointing to center */}
                  <div className="absolute bottom-6 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#1a1f2e]"></div>
                </div>
              ) : (
                // Date (Left side)
                <div className="flex items-center h-16">
                  <p className="text-gray-400 font-medium">{item.date}</p>
                </div>
              )}
            </div>

            {/* Center Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-white border-4 border-gray-700 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap size={20} className="md:size-6 text-gray-800" />
            </div>

            {/* Right Side */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0 ? "justify-start pl-12 md:pl-20" : "justify-start pl-12 md:pl-20"
              }`}
            >
              {index % 2 === 0 ? (
                // Date (Right side)
                <div className="flex items-center h-16">
                  <p className="text-gray-400 font-medium">{item.date}</p>
                </div>
              ) : (
                // Card on right
                <div className="relative w-full max-w-lg">
                  <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base mb-4">
                      {item.degree}
                    </p>
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      <p className="text-gray-300 text-sm font-medium">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-sm">{item.location}</p>
                      <p className="text-gray-300 text-sm font-medium">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  {/* Arrow pointing to center */}
                  <div className="absolute bottom-6 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-[#1a1f2e]"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Single Column View */}
      <div className="lg:hidden max-w-4xl mx-auto px-4 md:px-6">
        {educationData.map((item, index) => (
          <div key={index} className="mb-8">
            {/* Education Card - Full Width */}
            <div className="bg-[#1a1f2e] border-b-4 border-indigo-500 p-6 shadow-xl rounded-md w-full">
              {/* Header with Icon, Title and Date */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 bg-white border-4 border-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap size={20} className="text-gray-800" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm md:text-base">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mt-2">
                    {item.degree}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <p className="text-gray-300 text-sm font-medium">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-sm">{item.location}</p>
                <p className="text-gray-300 text-sm font-medium">
                  {item.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;