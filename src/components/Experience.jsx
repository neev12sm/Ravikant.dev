import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "WorkLooper Consultants",
      role: "Backend Developer",
      duration: "Jan 2024 - Jun 2024",
      icon: <FaCode />,
      color: "from-purple-600 to-fuchsia-600",
      description:
        "Developed scalable backend applications using Node.js, Express.js and MongoDB. Built REST APIs, implemented authentication systems, optimized database queries and collaborated closely with frontend teams.",
      achievements: [
        "Built REST APIs",
        "MongoDB Database Design",
        "JWT Authentication",
        "Backend Performance Optimization",
      ],
    },

    {
      company: "Holistic People",
      role: "Business Development Executive (US Staffing)",
      duration: "Jul 2024 - Jan 2025",
      icon: <FaUsers />,
      color: "from-blue-500 to-purple-600",
      description:
        "Handled complete US staffing lifecycle, working with Prime Vendors and End Clients. Managed candidate sourcing, submissions, client communication and interview coordination.",
      achievements: [
        "US Staffing",
        "Prime Vendor Management",
        "End Client Coordination",
        "Candidate Submission & Screening",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] md:w-[500px] md:h-[500px] bg-purple-600/20 blur-[120px] md:blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] md:w-[500px] md:h-[500px] bg-fuchsia-600/20 blur-[120px] md:blur-[180px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-24"
        >
         <p className="uppercase tracking-[4px] md:tracking-[8px] text-purple-400 font-semibold text-sm md:text-base">
            EXPERIENCE
          </p>

         <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mt-4">
            Professional
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg px-2">
            My professional experience across software development,
            backend engineering and US staffing operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-fuchsia-500 to-blue-500 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className={`relative flex items-center mb-10 md:mb-24 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="
                  hidden md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-16
                  h-16
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-fuchsia-500
                  items-center
                  justify-center
                  text-white
                  text-xl
                  shadow-[0_0_40px_rgba(168,85,247,0.8)]
                "
              >
                {exp.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
            className="
w-full
md:w-[45%]
bg-white/[0.04]
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-5
sm:p-6
lg:p-8
relative
overflow-hidden
group
"
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-r ${exp.color}
                    blur-[120px]
                  `}
                />

                <div className="relative z-10">
                  {/* Duration */}
                  <div
                    className="
                      inline-flex
                      px-4
                      py-2
                      rounded-full
                      bg-purple-500/20
                      border
                      border-purple-500/30
                      text-purple-300
                      text-xs sm:text-sm
                    "
                  >
                    {exp.duration}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-5">
                    {exp.role}
                  </h3>

                  <p className="text-fuchsia-400 font-semibold text-base md:text-lg mt-2">
                    {exp.company}
                  </p>

                  <p className="text-gray-400 text-sm md:text-base leading-7 md:leading-8 mt-5">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {exp.achievements.map((item, i) => (
                      <span
                        key={i}
                    className="
px-3
sm:px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-xs
sm:text-sm
text-gray-300
"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-8">
                    <button
                    className="
flex items-center gap-2
text-purple-400
font-semibold
text-sm
md:text-base
"
                    >
                      Experience Details
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-purple-400">
              2+
            </h3>
            <p className="text-gray-400 mt-2">
              Professional Roles
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-purple-400">
              1+
            </h3>
            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center">
            <h3  className="text-4xl md:text-5xl font-bold text-blue-400">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Passion For Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}