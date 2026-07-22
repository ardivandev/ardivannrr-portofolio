import { FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Educational() {
  return (
    <div className="my-10">
      <motion.h2
        className="font-poppins font-bold text-2xl mb-8 mx-auto text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        - Educational -
      </motion.h2>
      <motion.div
        className="mx-auto flex items-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div>
          <FaCircle />
        </div>
        <div>
          <h3 className="font-semibold font-poppins text-lg">SMKN 13 Bandung</h3>
          <p className="text-gray-500 text-sm">Software Engineering</p>
          <p className="text-gray-400 text-xs">2023 - 2026</p>
        </div>
      </motion.div>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <motion.h2
        className="font-poppins font-bold text-2xl mb-8 mx-auto text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        - Experience -
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {experiences.map((exp, index) => (
          <motion.div
            className=" mx-auto flex items-center gap-5 mb-8"
            key={index}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div>
              <FaCircle />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <p className="text-gray-500 text-sm">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-400 text-xs mb-2">{exp.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-20 mt-20 px-5 flex justify-center items-center dark:bg-dark dark:text-white">
      <div className="container">
        <motion.h1
          className="font-poppins font-bold text-4xl mb-10 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <div>
          <motion.p
            className="w-full mx-auto my-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm Ardivan Nur Raihan Rahman, a Front-End Developer and Quality Assurance Tester with
            an educational background from SMKN 13 Bandung. I have a strong interest in building
            responsive, user-friendly web interfaces, and ensuring every feature works as intended
            through both manual and automated testing. This dual role has trained me to think from
            two perspectives at once: as a builder of features, and as a tester looking for gaps
            before a product reaches its users.
          </motion.p>
        </div>

        <Educational />
        <Experience />
      </div>
    </section>
  );
}
