

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

export default function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      image: project1,
      description:
        "A full-stack expense tracking application with authentication and analytics.",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      title: "Netflix Clone",
      image: project2,
      description:
        "Netflix-inspired movie streaming platform using TMDB API.",
      tech: ["React", "Firebase", "TMDB API"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "Modern animated portfolio built with React, Tailwind and Framer Motion.",
      tech: ["React", "Tailwind", "Framer Motion"],
      demo: "#",
      github: "#",
    },
    {
      title: "Real Estate",
      image: project4,
      description:
        "Property listing and filtering platform with responsive UI.",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      title: "Dream Nest",
      image: project5,
      description:
        "Modern hotel booking platform with advanced search features.",
      tech: ["React", "Express", "MySQL"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#050816] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[350px] h-[350px] bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-fuchsia-600/20 blur-[140px]" />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* Heading */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
>
 <div className="flex items-center justify-center gap-4">
  <div className="w-16 h-[2px] bg-purple-500"></div>

  <p className="uppercase tracking-[8px]  text-purple-500 font-semibold text-sm">
    FEATURED PROJECTS
  </p>

  <div className="w-16 h-[2px] bg-purple-500"></div>
</div>
  <h2 className="text-white text-5xl md:text-7xl font-bold mt-4 leading-tight">
    Curious What Else
    <br />
    I've Created?
  </h2>

  <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
   Crafting modern, scalable, and user-focused digital experiences with React, MERN Stack, and cutting-edge web technologies.
  </p>

  <button
    className="
      mt-8
      px-8
      py-3
      rounded-full
      border
      border-purple-500/30
      text-white
      flex
      items-center
      gap-4
      mx-auto
      bg-white/5
      backdrop-blur-md
      hover:border-purple-500
      transition-all
    "
  >
    See more Projects

    <span
      className="
        w-10
        h-10
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-fuchsia-600
        flex
        items-center
        justify-center
      "
    >
      →
    </span>
  </button>
</motion.div>

        {/* Projects Row */}
        <div className="flex flex-wrap justify-center gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                w-[260px]
                bg-gradient-to-b
                from-[#111827]
                to-[#0b1020]
                border
                border-purple-500/20
                rounded-3xl
                overflow-hidden
                shadow-[0_0_20px_rgba(168,85,247,0.12)]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[160px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 h-[80px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-2 py-1
                        rounded-full
                        bg-purple-500/15
                        text-purple-300
                        text-[11px]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      py-2.5
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      to-fuchsia-600
                      text-white
                      text-sm
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      py-2.5
                      rounded-xl
                      border
                      border-purple-500
                      text-white
                      text-sm
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}





