import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  House,
  User,
  Briefcase,
  Award,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  const navItems = [
    { name: "Home", icon: House },
    { name: "About", icon: User },
    { name: "Experience", icon: Briefcase },
    { name: "Certifications", icon: Award },
    { name: "Projects", icon: FolderKanban },
    { name: "Contact", icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center"
    >
      <nav
        className={`
          w-[98vw]
          max-w-[1600px]
          rounded-full
          backdrop-blur-xl
          px-8
          py-4
          transition-all
          duration-500
          ${
            darkMode
              ? `
                border border-white/10
                bg-black/30
                shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              `
              : `
                border border-purple-400/30
                bg-gradient-to-r
                from-purple-600/30
                via-fuchsia-500/30
                to-cyan-500/30
                shadow-[0_10px_40px_rgba(168,85,247,0.45)]
              `
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <motion.div
              animate={{
                boxShadow: darkMode
                  ? [
                      "0 0 10px rgba(168,85,247,0.5)",
                      "0 0 25px rgba(34,211,238,0.8)",
                      "0 0 10px rgba(168,85,247,0.5)",
                    ]
                  : [
                      "0 0 20px rgba(168,85,247,0.9)",
                      "0 0 40px rgba(34,211,238,1)",
                      "0 0 20px rgba(168,85,247,0.9)",
                    ],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                h-12
                w-12
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-xl
              "
            >
              R
            </motion.div>

            <h1
              className={`font-bold text-2xl transition-all duration-500 ${
                darkMode
                  ? "text-white"
                  : "text-cyan-200"
              }`}
            >
              Ravikant
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className={`
                      flex
                      items-center
                      gap-2
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      ${
                        darkMode
                          ? "text-gray-300 hover:text-violet-400"
                          : "text-white hover:text-cyan-300"
                      }
                    `}
                  >
                    <Icon size={18} />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block h-8 w-px bg-white/10"></div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                h-11
                w-11
                rounded-full
                border
                flex
                items-center
                justify-center
                transition-all
                duration-500
                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/5
                      text-white
                      hover:bg-violet-500/20
                    `
                    : `
                      border-cyan-400/30
                      bg-cyan-500/10
                      text-cyan-200
                      hover:bg-cyan-500/20
                    `
                }
              `}
            >
              {darkMode ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </button>

            {/* Mobile Menu Button */}
        {!menuOpen && (
  <button
    onClick={() => setMenuOpen(true)}
    className={`lg:hidden ${
      darkMode ? "text-white" : "text-cyan-200"
    }`}
  >
    <Menu size={26} />
  </button>
)}
          </div>
        </div>

        {/* Mobile Menu */}
       {menuOpen && (
  <>
    {/* Dark Overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
    />

    {/* Sidebar */}
    <motion.div
    initial={{
x:-350,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

exit={{
x:-350,
opacity:0
}}

transition={{
type:"spring",
stiffness:90,
damping:18
}}  
    
      className={`fixed
top-0
left-0
h-screen
w-[68%]
max-w-[280px]
z-50
overflow-hidden
rounded-r-[42px]
backdrop-blur-3xl
shadow-[0_0_60px_rgba(168,85,247,0.35)]
      ${
        darkMode
          ? "bg-[#09090f]/95 border-r border-white/10"
          : "bg-[#170028]/95 border-r border-purple-500/30"
      }
      backdrop-blur-2xl`}
    >
    <div className="relative flex items-center justify-between px-6 py-7 border-b border-white/10">

    <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            R
        </div>

        <div>
            <h2 className="text-white font-bold text-2xl">
                Ravikant
            </h2>

            <p className="text-gray-400 text-xs">
                MERN Stack Developer
            </p>

        </div>

    </div>

    <button
        onClick={() => setMenuOpen(false)}
        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/10 transition"
    >
        <X size={20}/>
    </button>

</div>

<ul className="flex flex-col gap-2 px-3 py-4">
    {navItems.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.name}>
        <a
          href={`#${item.name.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
      className={`
group
relative
flex
items-center
gap-4
mx-3
h-10
px-4
rounded-full
transition-all
duration-300
${
  darkMode
    ? `
      text-gray-300
      hover:text-white
      hover:bg-gradient-to-r
      hover:from-violet-500/15
      hover:to-cyan-500/15
    `
    : `
      text-white
      hover:text-cyan-200
      hover:bg-gradient-to-r
      hover:from-violet-500/15
      hover:to-cyan-500/15
    `
}
`}
        >
          {/* Left Indicator */}
          <span
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              h-0
              w-1
              rounded-r-full
              bg-gradient-to-b
              from-violet-500
              to-cyan-400
              transition-all
              duration-300
              group-hover:h-5
            "
          />

          {/* Icon */}
          <Icon
            size={18}
            className="
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          {/* Text */}
          <span className="font-medium tracking-wide">
            {item.name}
          </span>

          {/* Arrow */}
          <span
            className="
              ml-auto
              opacity-0
              translate-x-3
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
            "
          >
            →
          </span>
        </a>
      </li>
    );
  })}
</ul>
    </motion.div>
  </>
)}
      </nav>
    </motion.header>
  );
}