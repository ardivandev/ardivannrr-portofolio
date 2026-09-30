import { motion } from 'framer-motion';
import Playwright from '/src/assets/logo/playwright.svg';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiJquery,
  SiAlpinedotjs,
  SiReact,
  SiPostman,
  SiVite,
} from 'react-icons/si';
import { FaBug, FaGitAlt, FaGithub, FaFigma, FaFileAlt } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';

const frontEndTechStack = [
  { icon: SiHtml5, label: 'HTML', color: '#E34F26' },
  { icon: SiCss, label: 'CSS', color: '#663399' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiSass, label: 'Sass', color: '#CC6699' },
  { icon: SiJquery, label: 'jQuery', color: '#0769AD' },
  { icon: SiAlpinedotjs, label: 'Alpine.js (Basic)', color: '#8BC0D0' },
];

const toolsAndQaTechStack = [
  { icon: FaGitAlt, label: 'Git', color: '#FF6C37' },
  { icon: FaGithub, label: 'Github', color: '' },
  { icon: FaFigma, label: 'Figma', color: '' },
  { icon: BiLogoVisualStudio, label: 'Visual Studio Code', color: '#2288f1' },
  { icon: SiVite, label: 'Vite', color: '#8c52ff' },
  { icon: SiPostman, label: 'Postman', color: '#FF6C37' },
  { icon: Playwright, label: 'Playwright' },
  { icon: FaBug, label: 'Manual Testing', color: '#EF4444' },
  { icon: FaFileAlt, label: 'Test Case Design', color: '#ffbd59' },
];

// Variants untuk container (mengatur jeda antar child/stagger)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants untuk tiap card icon
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

function TechCard({ icon: Icon, label, color = 'currentColor' }) {
  const isImageIcon = typeof Icon === 'string';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="bg-gray-50 dark:bg-secondary-dark flex items-center gap-2 p-2 rounded shadow"
    >
      {isImageIcon ? (
        <img src={Icon} alt={label} className="w-6 h-6" />
      ) : (
        <span style={{ color }}>
          <Icon size={24} />
        </span>
      )}
      <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">{label}</span>
    </motion.div>
  );
}

function SkillGroup({ title, stack, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="w-full md:w-1/2 p-5 rounded-xl bg-white dark:bg-dark"
    >
      <h3 className="md:text-xl text-lg text-center mb-10 font-semibold">{title}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-center gap-5 flex-wrap w-full md:w-[80%] mx-auto"
      >
        {stack.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 px-5 bg-gray-100 dark:bg-secondary-dark dark:text-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-3xl text-xl text-center font-poppins font-bold"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-sm md:text-base text-gray-500 mt-2 mb-16"
        >
          Technologies and tools I work with
        </motion.p>

        <div className="flex flex-col md:flex-row gap-16 md:gap-8">
          <SkillGroup title="- Front-End Developer -" stack={frontEndTechStack} />
          <SkillGroup title="- Tools & QA Skills -" stack={toolsAndQaTechStack} delay={0.15} />
        </div>
      </div>
    </section>
  );
}
