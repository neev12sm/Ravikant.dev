
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
   className="relative bg-[#050816] overflow-hidden pt-20 md:pt-32"
 >
{/* Background Effects */} 
<div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[700px] md:h-[700px] bg-purple-600/20 blur-[120px] md:blur-[220px]" />

<div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[700px] md:h-[700px] bg-fuchsia-600/20 blur-[120px] md:blur-[220px]" />

  <div className="
rounded-[28px]
md:rounded-[50px]
overflow-hidden
border
border-white/10
bg-gradient-to-br
from-[#12001f]
via-[#170028]
to-[#050816]
backdrop-blur-xl
shadow-[0_0_100px_rgba(168,85,247,0.15)]
">
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
      <div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-20
px-6
sm:px-8
lg:px-24
py-14
lg:py-28
">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[3px] md:tracking-[6px] text-purple-400 mb-4 text-sm md:text-base text-center lg:text-left">
            Ready To Collaborate
          </p>

          <h5
           className="
text-4xl
sm:text-5xl
md:text-7xl
lg:text-[70px]
font-black
leading-tight
lg:leading-[0.9]
text-white
text-center
lg:text-left
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
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-gray-400 text-base md:text-lg leading-8">
            Looking for a developer who can transform ideas into
            scalable and visually stunning web experiences?
            Let's create something extraordinary together.
          </p>

          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-8 break-all">
            neevsharma.dev@gmail.com
          </h3>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#contact"
              className="
                w-full sm:w-auto px-6 py-3
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
                w-full sm:w-auto px-6 py-3
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
      <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-10
px-6
sm:px-8
lg:px-24
py-14
">
        {/* BRAND */}
        <div>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Ravikant
          </h3>

          <p className="text-purple-400 mt-3">
            Full Stack Developer
          </p>

          <p className="text-gray-400 mt-5 leading-7 text-sm md:text-base">
            Crafting modern digital experiences with React,
            Node.js, MongoDB and cutting-edge web technologies.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white text-xl font-bold mb-6">
            Quick Links
          </h4>

          <div className="space-y-3 text-gray-400 text-sm md:text-base">
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

          <div className="space-y-4 text-sm md:text-base">
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
w-12
h-12
md:w-14
md:h-14
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
py-5
md:py-6
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
text-xs
sm:text-sm
md:text-base
px-4
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
