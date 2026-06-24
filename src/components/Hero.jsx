import { motion } from "framer-motion";
import profile from "../assets/neev.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#d8d0e8] via-[#cbbce9] to-[#6f2cff] p-3 sm:p-4 md:p-6 relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#6d28ff] blur-[220px] opacity-70" />

      {/* Main Container */}
      <div className="relative w-full min-h-[850px] lg:h-[900px] overflow-hidden rounded-[25px] md:rounded-[40px] bg-[#050816] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

        {/* Left Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/40 blur-[180px]" />

        {/* Right Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[180px]" />

        {/* Background Name */}
   <h1
  className="
  absolute
  top-25
  left-1/2
  -translate-x-1/2
  font-black
  uppercase
  whitespace-nowrap
  select-none
  z-0
  text-white/[0.12]

  text-[30px]
  sm:text-[60px]
  md:text-[90px]
  lg:text-[110px]
  xl:text-[140px]
  "
>
  RAVIKANT SHARMA
</h1>

        {/* Circles */}
 <div className="absolute inset-0 flex justify-center translate-y-[130px] md:translate-y-0">

          <div
            className="
            absolute
            w-[380px]
            h-[380px]
            sm:w-[500px]
            sm:h-[500px]
            md:w-[650px]
            md:h-[650px]
            lg:w-[800px]
            lg:h-[800px]
            rounded-full
            bg-white/[0.03]
          "
          />

          <div
            className="
            absolute
            w-[280px]
            h-[280px]
            sm:w-[380px]
            sm:h-[380px]
            md:w-[500px]
            md:h-[500px]
            lg:w-[620px]
            lg:h-[620px]
            rounded-full
            bg-white/[0.03]
          "
          />

          <div
            className="
            absolute
            w-[180px]
            h-[180px]
            sm:w-[260px]
            sm:h-[260px]
            md:w-[350px]
            md:h-[350px]
            lg:w-[450px]
            lg:h-[450px]
            rounded-full
            bg-white/[0.03]
          "
          />

        </div>

        {/* Desktop Skill Cards */}

        <motion.div
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
          hidden lg:block
          absolute
          top-[35%]
          left-[8%]
          px-6 py-3
          rounded-2xl
          bg-cyan-500/20
          border border-cyan-400/30
          backdrop-blur-xl
          text-white
          font-medium
          z-20
        "
        >
          ⚛️ React.js Developer
        </motion.div>

        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
          hidden lg:block
          absolute
          top-[35%]
          right-[8%]
          px-6 py-3
          rounded-2xl
          bg-purple-500/20
          border border-purple-400/30
          backdrop-blur-xl
          text-white
          font-medium
          z-20
        "
        >
          🚀 Full Stack Developer
        </motion.div>

        <motion.div
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
          hidden lg:block
          absolute
          top-[55%]
          left-[8%]
          px-6 py-3
          rounded-2xl
          bg-green-500/20
          border border-green-400/30
          backdrop-blur-xl
          text-white
          font-medium
          z-20
        "
        >
          🟢 Node.js Developer
        </motion.div>

        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
          hidden lg:block
          absolute
          top-[55%]
          right-[8%]
          px-6 py-3
          rounded-2xl
          bg-orange-500/20
          border border-orange-400/30
          backdrop-blur-xl
          text-white
          font-medium
          z-20
        "
        >
          🔥 MERN Stack Developer
        </motion.div>

        {/* Center Image */}
<motion.img
  src={profile}
  alt="Neev Sharma"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
  absolute
  left-1/2
  -translate-x-1/2

  top-[170px]
  sm:top-[180px]
  md:top-[200px]
  lg:bottom-0
  lg:top-auto

  h-[260px]
  sm:h-[320px]
  md:h-[500px]
  lg:h-[760px]

  object-contain
  z-10
  "
/>


                {/* Left Content - Desktop */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          hidden lg:block
          absolute
          left-12
          bottom-24
          max-w-sm
          z-20
        "
        >
          <p className="text-white/90 text-lg leading-relaxed">
            I create interfaces that blend function with emotion,
            crafting digital experiences that feel intuitive,
            seamless and meaningful.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              w-14 h-14 rounded-full
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-500
              text-white
              text-xl
              hover:scale-110
              transition
            "
            >
              X
            </button>

            <button
              className="
              w-14 h-14 rounded-full
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-500
              text-white
              text-xl
              hover:scale-110
              transition
            "
            >
              G
            </button>

            <button
              className="
              w-14 h-14 rounded-full
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-500
              text-white
              text-xl
              hover:scale-110
              transition
            "
            >
              I
            </button>

          </div>
        </motion.div>

        {/* Right Content - Desktop */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          hidden lg:block
          absolute
          right-12
          bottom-24
          max-w-sm
          z-20
          text-right
        "
        >
          <p className="text-white/90 text-lg leading-relaxed">
            Merging design thinking with development skills to build
            modern web applications that look beautiful and perform
            flawlessly.
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            text-white
            font-semibold
            hover:scale-105
            transition
          "
          >
            Let's Talk →
          </button>
        </motion.div>

        {/* Mobile / Tablet Layout */}

        <div
          className="
          lg:hidden
          relative
          z-20
          flex
          flex-col
          items-center
          text-center
          px-6
          pt-[430px]
          sm:pt-[520px]
        "
        >

          {/* Mobile Skills */}

          <div className="flex flex-wrap justify-center gap-3">

            <div className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-white text-sm">
              ⚛️ React
            </div>

            <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-400/30 text-white text-sm">
              🚀 Full Stack
            </div>

            <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-400/30 text-white text-sm">
              🟢 Node
            </div>

            <div className="px-4 py-2 rounded-xl bg-orange-500/20 border border-orange-400/30 text-white text-sm">
              🔥 MERN
            </div>

          </div>

          <p className="text-white mt-8 text-lg leading-relaxed max-w-md">
            I create interfaces that blend function with emotion,
            crafting digital experiences that feel intuitive,
            seamless and meaningful.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white">
              X
            </button>

            <button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white">
              G
            </button>

            <button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white">
              I
            </button>

          </div>

          <p className="text-white mt-12 text-lg leading-relaxed max-w-md">
            Merging design thinking with development skills to build
            modern web applications that look beautiful and perform
            flawlessly.
          </p>

          <button
            className="
            mt-8
            mb-12
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            text-white
            font-semibold
          "
          >
            Let's Talk →
          </button>

        </div>

      </div>
    </section>
  );
}