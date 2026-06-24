
import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedinIn,
FaEnvelope,
FaArrowRight,
FaDownload,
FaInstagram,
} from "react-icons/fa";

export default function Footer() {
return ( <footer
   id="contact"
   className="relative bg-[#050816] overflow-hidden pt-32"
 >
{/* Background Effects */} <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[220px]" />

```
  <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-fuchsia-600/20 blur-[220px]" />

  <div className="w-[95%] mx-auto relative z-10">
    <div
      className="
        rounded-[50px]
        overflow-hidden
        border
        border-white/10
        bg-gradient-to-br
        from-[#12001f]
        via-[#170028]
        to-[#050816]
        backdrop-blur-xl
        shadow-[0_0_100px_rgba(168,85,247,0.15)]
      "
    >
      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-2 gap-20 px-10 lg:px-24 py-20 lg:py-28">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-purple-400 mb-6">
            Ready To Collaborate
          </p>

          <h5
            className="
              text-3xl
              md:text-7xl
              lg:text-[70px]
              font-black
              leading-[0.9]
              text-white
            "
          >
            LET'S
            <br />
            WORK
            <br />
            TOGETHER
          </h5>
        </motion.div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-lg leading-9">
            Looking for a developer who can transform ideas into
            scalable and visually stunning web experiences?
            Let's create something extraordinary together.
          </p>

          <h3 className="text-white text-3xl font-bold mt-10">
            neevsharma.dev@gmail.com
          </h3>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="
                px-8 py-4
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                text-white
                font-semibold
                flex items-center gap-3
                hover:scale-105
                transition
              "
            >
              Get In Touch
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                px-8 py-4
                rounded-full
                border
                border-purple-500
                bg-white/5
                text-white
                font-semibold
                flex items-center gap-3
                hover:bg-purple-600/20
                transition
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-4 gap-12 px-10 lg:px-24 py-16">
        {/* BRAND */}
        <div>
          <h3 className="text-5xl font-black text-white">
            Ravikant
          </h3>

          <p className="text-purple-400 mt-3">
            Full Stack Developer
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            Crafting modern digital experiences with React,
            Node.js, MongoDB and cutting-edge web technologies.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white text-xl font-bold mb-6">
            Quick Links
          </h4>

          <div className="space-y-4 text-gray-400">
            <a href="#home" className="block hover:text-purple-400">
              Home
            </a>

            <a href="#about" className="block hover:text-purple-400">
              About
            </a>

            <a href="#projects" className="block hover:text-purple-400">
              Projects
            </a>

            <a
              href="#experience"
              className="block hover:text-purple-400"
            >
              Experience
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white text-xl font-bold mb-6">
            Contact
          </h4>

          <div className="space-y-5">
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-white">
                neevsharma.dev@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-white">
                +91 6398596316
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-white">
                Ghaziabad, India
              </p>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white text-xl font-bold mb-6">
            Connect
          </h4>

          <div className="flex flex-wrap gap-4">
            {[
              <FaGithub />,
              <FaLinkedinIn />,
              <FaInstagram />,
              <FaEnvelope />,
            ].map((icon, index) => (
              <motion.a
                key={index}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                href="#"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-purple-600
                  transition
                "
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-400">
              Let's connect and build something impactful.
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
    <div
  className="
    py-6
    text-center
    border-t
    border-purple-500/20
    bg-black/30
    backdrop-blur-xl
    transition-all
    duration-500
    hover:bg-purple-900/30
  "
>
  <p
    className="
      text-gray-400
      transition-all
      duration-500
      hover:text-purple-200
      hover:scale-105
      cursor-default
    "
  >
    © 2026 Ravikant Sharma • Crafted with ❤️ and lots of coffee ☕
  </p>
</div>
    </div>
  </div>
</footer>


);
}
