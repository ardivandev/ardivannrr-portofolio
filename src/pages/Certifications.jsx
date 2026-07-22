import { motion } from 'framer-motion';
import { certificates } from '../data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Certifications() {
  return (
    <section className="py-20 mt-20 px-5 flex justify-center items-center dark:bg-dark dark:text-white">
      <div className="container">
        <motion.h1
          className="font-poppins font-bold text-4xl mb-2 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          My Certificates
        </motion.h1>

        <motion.div
          className="mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              className="w-full dark:bg-secondary-dark bg-gray-100 flex flex-col   gap-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-secondary-dark/70 shadow group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-lg font-bold dark:text-white font-poppins">{item.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 font-semibold">
                {item.issuer}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Issued : {item.date}</p>

              <a
                href={item.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs py-3 px-6 rounded bg-white dark:bg-dark font-semibold transition-all duration-300 mt-1 hover:underline shadow"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
