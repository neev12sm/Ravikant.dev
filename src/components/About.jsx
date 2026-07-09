import { motion } from "framer-motion";
import profile from "../assets/lap.png";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export default function About() {
  const skills = [
    {
      name: "React.js",
      icon: <FaReact size={40} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={40} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={40} />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} />,
    },
  ];

  return (
    <section
      id="about"
     className="relative bg-[#050816] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[500px] h-[200px] bg-purple-600/20 blur-[180px]" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[200px] bg-fuchsia-600/20 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
       
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center mb-10 lg:mb-0"
>
  <div className="relative flex items-center justify-center">

    {/* Big Glow */}
    <div className="absolute w-[280px] h-[280px]
sm:w-[420px] sm:h-[420px]
lg:w-[600px] lg:h-[600px] rounded-full bg-purple-600/30 blur-[160px]" />

    {/* Ring 1 */}
    <div className="absolute w-[220px] h-[220px]
sm:w-[320px] sm:h-[320px]
lg:w-[460px] lg:h-[460px] rounded-full border border-purple-500/20" />

    {/* Ring 2 */}
    <div className="absolute w-[250px] h-[250px]
sm:w-[360px] sm:h-[360px]
lg:w-[520px] lg:h-[520px] rounded-full border border-purple-500/10" />

    {/* Ring 3 */}
    <div className="absolute w-[280px] h-[280px]
sm:w-[400px] sm:h-[400px]
lg:w-[580px] lg:h-[580px] rounded-full border border-purple-500/5" />

    {/* Photo */}
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="
        relative
        w-[180px]
h-[180px]

sm:w-[260px]
sm:h-[260px]

md:w-[320px]
md:h-[320px]

lg:w-[420px]
lg:h-[420px]
        rounded-full
        overflow-hidden
        border-4
        border-purple-500/40
        shadow-[0_0_120px_rgba(168,85,247,1)]
        z-10
      "
    >
      <img
        src={profile}
        alt="Neev Sharma"
        className="w-full h-full object-cover"
      />
    </motion.div>

  </div>
</motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              I specialize in building modern web applications using
              React.js, Node.js, Express.js and MongoDB.

              I enjoy transforming ideas into responsive,
              high-performance digital products with excellent user
              experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-5 md:p-8
                "
              >
                <h4 className="text-5xl font-bold text-purple-500">
                  6+
                </h4>
                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                "
              >
                <h4 className="text-5xl font-bold text-purple-500">
                  20+
                </h4>
                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </motion.div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
                Skills & Tools
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    className="flex justify-center"
                  >
                    <div className="relative w-[100px] h-[100px]

sm:w-[120px]
sm:h-[120px]

lg:w-[140px]
lg:h-[140px]">
                      {/* Outer Ring */}
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border-[6px]
                          border-purple-500
                          shadow-[0_0_35px_rgba(168,85,247,0.8)]
                        "
                      />

                      {/* Inner Circle */}
                      <div
                        className="
                          absolute
                          inset-[8px] sm:inset-[10px] lg:inset-[12px]
                          rounded-full
                          bg-[#0f172a]
                          border
                          border-purple-500/20
                          flex
                          flex-col
                          items-center
                          justify-center
                          text-purple-400
                        "
                      >
                        {skill.icon}

                        <p className="text-white text-sm mt-3 font-medium text-center">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <button
              className="
                mt-12
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}