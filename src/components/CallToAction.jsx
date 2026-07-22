import { motion } from 'framer-motion';
import { NavLink } from 'react-router';

export default function CallToAction() {
  return (
    <section className="py-20 px-5 bg-gray-100 dark:bg-secondary-dark dark:text-white flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full md:w-1/2 h-64 dark:bg-dark rounded-2xl flex flex-col items-center justify-center gap-2 p-5 bg-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-bold text-2xl text-center md:text-3xl font-poppins mb-2"
        >
          Have an idea for a project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center text-sm md:text-base mb-5"
        >
          Let's discuss it and bring it to life together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <NavLink
            to="/contact"
            className="border-2 border-gray-500 py-2 px-3 rounded text-sm md:text-md font-semibold hover:bg-gray-500 hover:text-white inline-block"
          >
            Contact Me
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
