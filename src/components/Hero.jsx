
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import profile from "../assets/neev.png";
const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/neev12sm",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/YOUR-LINKEDIN/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/YOUR-INSTAGRAM/",
  },
];
export default function Hero() {
  return (
  <section
  id="home"
  className="relative overflow-hidden bg-[#080812] min-h-screen text-white pt-12 lg:pt-12"
>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      </div>

      {/* Container */}

       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <div
className="
flex
flex-col
items-center
justify-center
gap-12
py-28

lg:grid
lg:grid-cols-3
lg:items-center
lg:gap-10
lg:min-h-screen
lg:py-0
"
>

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

              Ravikant

              <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sharma
              </span>
            </h2>
           <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
              MERN Stack Developer
            </h3>
            <p className="mt-6 max-w-sm sm:max-w-md text-sm sm:text-base text-gray-400 leading-7 mx-auto lg:mx-0">
              Passionate about building scalable web
              applications with modern UI, clean code,
              and exceptional user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">

              <Link
  to="projects"
  smooth={true}
  duration={600}
  offset={-110}
  className="cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 sm:px-7 py-3 sm:py-4 font-semibold hover:scale-105 transition"
>
  View Projects
</Link>
<Link
  to="contact"
  smooth={true}
  duration={600}
  offset={-110}
  className="cursor-pointer flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl hover:border-purple-500 transition"
>
  Let's Talk
  <FaArrowRight />
</Link>

            </div>

         <div className="mt-10 flex gap-4 justify-center lg:justify-start">
  {socialLinks.map(({ icon: Icon, url }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500 hover:text-purple-400 transition"
    >
      <Icon />
    </a>
  ))}
</div>

          </motion.div>

        
{/* ===========================
      CENTER SECTION
=========================== */}

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}

className="
order-1
lg:order-2
flex
justify-center
lg:justify-end
items-center
relative
mt-6
lg:mt-0
lg:translate-x-80
xl:translate-x-80
"
>
  <div className="relative flex items-center justify-center">

    {/* Cosmic Glow */}

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[620px] lg:h-[620px] rounded-full bg-purple-500/20 blur-[120px]"
    />

    {/* Outer Ring */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
     className="
absolute
w-[240px] h-[240px]
sm:w-[320px] sm:h-[320px]
md:w-[420px] md:h-[420px]
lg:w-[520px] lg:h-[520px]
rounded-full
border
border-purple-500/20
shadow-[0_0_40px_rgba(168,85,247,.5)]
"
    />

    {/* Energy Ring */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
   className="
absolute
w-[220px] h-[220px]
sm:w-[300px] sm:h-[300px]
md:w-[390px] md:h-[390px]
lg:w-[480px] lg:h-[480px]
"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg,#9333ea,#06b6d4,#ec4899,#9333ea)",
          WebkitMask:
            "radial-gradient(farthest-side,transparent calc(100% - 6px),black 0)",
          mask:
            "radial-gradient(farthest-side,transparent calc(100% - 6px),black 0)",
        }}
      />
    </motion.div>

    {/* Middle Ring */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
absolute
w-[190px] h-[190px]
sm:w-[270px] sm:h-[270px]
md:w-[350px] md:h-[350px]
lg:w-[430px] lg:h-[430px]
rounded-full
border
border-cyan-400/20
"
    />

    {/* Inner Ring */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
    className="
absolute
w-[160px] h-[160px]
sm:w-[240px] sm:h-[240px]
md:w-[320px] md:h-[320px]
lg:w-[380px] lg:h-[380px]
rounded-full
border
border-fuchsia-500/20
"
    />

    {/* Orbiting Glowing Balls */}

    {[0, 60, 120, 180, 240, 300].map((deg, index) => (
  <motion.div
    key={index}
    animate={{ rotate: 360 }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[520px] h-[520px] hidden lg:block"
  >
    <div
      className="absolute w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_25px_#a855f7]"
      style={{
        top: "50%",
        left: "50%",
        transform: `rotate(${deg}deg) translateY(-260px)`,
      }}
    />
  </motion.div>
))}

    {/* Glass Image Frame */}

    <div className="relative flex items-center justify-center w-[170px] h-[170px]
sm:w-[230px] sm:h-[230px]
md:w-[300px] md:h-[300px]
lg:w-[370px] lg:h-[370px] rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_100px_rgba(168,85,247,.4)]">

      {/* Animated Glow */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-xl"
      />

      {/* Image */}

      <motion.img
        src={profile}
        alt="Neev Sharma"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="relative z-10 rounded-full object-cover border-[5px] border-purple-400/40 shadow-[0_0_60px_rgba(168,85,247,.7)] w-[135px] h-[135px]
sm:w-[180px] sm:h-[180px]
md:w-[240px] md:h-[240px]
lg:w-[330px] lg:h-[330px]
"
      />
    </div>

    {/* Floating Nebula */}

    <motion.div
      animate={{
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="absolute left-0 top-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-cyan-400/20 blur-3xl"
    />

    <motion.div
      animate={{
        x: [0, -15, 0],
        y: [0, 15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="absolute right-0 bottom-10 w-32 h-32 rounded-full bg-fuchsia-500/20 blur-3xl"
    />

  </div>
</motion.div>

{/* Close Grid */}
</div>
{/* Scroll Indicator */}
<div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center">
  <span className="text-xs tracking-[4px] uppercase text-gray-500 mb-3">
    Scroll
  </span>
  <motion.div
    animate={{
      y: [0, 15, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
    className="w-7 h-12 rounded-full border border-white/20 flex justify-center"
  >
    <div className="w-1 h-3 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 mt-2"></div>
  </motion.div>

</div>
{/* Floating Particles */}
{Array.from({ length: 15 }).map((_, index) => (

  <motion.span
    key={index}
    animate={{
      y: [0, -25, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      repeat: Infinity,
      duration: 3 + Math.random() * 3,
      delay: index * 0.25,
    }}
    className="absolute rounded-full bg-purple-400/30 blur-sm"
    style={{
      width: `${4 + Math.random() * 5}px`,
      height: `${4 + Math.random() * 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
  />
))}
</div>
</section>
  );
}




