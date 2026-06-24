import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

import softcon from "../assets/softcon.png";
import lovebabbar from "../assets/lovebabbar.png";

const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Love Babbar",
    date: "1 Jan 2024 - 30 Jun 2024",
    image: lovebabbar,
    link: lovebabbar,
  },
  {
    title: "C++, Python & Soft Skills",
    issuer: "Softcon India Pvt. Ltd.",
    date: "1 Jul 2023 - 31 Dec 2023",
    image: softcon,
    link: softcon,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 blur-[180px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-600/20 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[4px] font-medium">
            Achievements
          </p>

          <h2
            className="
              mt-4
              text-5xl
              md:text-7xl
              font-black
              bg-gradient-to-r
              from-purple-400
              via-fuchsia-400
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Certifications
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Professional certifications showcasing my expertise in
            Full Stack Development, C++, Python, and Software Engineering.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                bg-white/[0.04]
                backdrop-blur-xl
                border
                border-white/10
                rounded-[30px]
                overflow-hidden
                transition-all
                duration-500
                hover:border-purple-500/50
                hover:shadow-[0_0_50px_rgba(168,85,247,0.35)]
              "
            >
              {/* Certificate Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-gradient-to-r
                      from-purple-600
                      to-fuchsia-600
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaAward className="text-white text-lg" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-xl">
                      {cert.title}
                    </h3>

                    <p className="text-purple-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">
                  Duration: {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    w-full
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    to-fuchsia-600
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                  "
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}