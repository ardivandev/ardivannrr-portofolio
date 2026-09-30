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
            Hi, I'm Ardivan. A Software Engineering graduate of SMK Negeri 13 Bandung focused on
            front-end web development with HTML, CSS, JavaScript (ES6+), React.js, and Tailwind CSS.
            I have built a variety of responsive web projects, including a React portfolio website
            and landing pages implemented from Figma designs, all available in the Projects section
            and on GitHub. My six-month internship as a QA Tester taught me to test my own work and
            communicate effectively with developers. I'm looking for a Junior Front-End Developer
            position where I can contribute and grow with an engineering team.
          </motion.p>
        </div>

        <Educational />
        <Experience />
      </div>
    </section>
  );
}
