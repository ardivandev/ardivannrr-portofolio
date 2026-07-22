import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import ardivanImg from '../assets/images/ardivan-img.jpg';

function HeroContent() {
  return (
    <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-2">
      <motion.p
        className="text-md md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi Everyone 👋, I'm
      </motion.p>
      <motion.h1
        className="text-2xl md:text-4xl font-bold font-poppins"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Ardivan Nur Raihan Rahman
      </motion.h1>
      <motion.p
        className="text-sm md:text-base font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Front-End Developer | Quality Assurance Tester
      </motion.p>
      <motion.p
        className="text-gray-500 text-sm md:text-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I am a passionate front-end developer and quality assurance tester with a strong focus on
        creating efficient and user-friendly web applications.
      </motion.p>
      <motion.div
        className="flex gap-5 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <NavLink
          to="/about"
          className="border-2 border-gray-500 py-2 px-3 rounded text-sm md:text-md font-semibold hover:bg-gray-500 hover:text-white"
        >
          Learn More
        </NavLink>
        <a
          href=""
          className="border-2 border-gray-500 py-2 px-3 rounded text-sm md:text-md font-semibold hover:bg-gray-500 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="w-full md:w-1/2 p-5 order-1 md:order-2 flex justify-center items-center mt-8 md:mt-0">
      <motion.img
        src={ardivanImg}
        alt="Ardivan Nur Raihan Rahman"
        loading="eager"
        fetchPriority="high"
        className="md:w-100 md:h-100 w-full object-cover rounded-2xl shadow"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className=" py-20 md:mt-10 dark:bg-dark dark:text-white">
      <div className="container flex flex-col items-center justify-center md:flex-row p-5 gap-1 md:gap-5 md:items-center md:justify-between ">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
