import { motion } from 'framer-motion';
import CardProject from './CardProject';
import { NavLink } from 'react-router';
import { projects } from '../data/projects';

// Container untuk stagger antar card
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FeatureProjects() {
  return (
    <section className="py-20 px-5 dark:text-white dark:bg-dark">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-2xl text-xl text-center font-poppins font-bold"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-sm md:text-base text-gray-500 mt-2 mb-16"
        >
          Following are some of the projects i have built
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 text-right"
        >
          <NavLink
            to="/projects"
            className="border-2 border-gray-500 py-2 px-3 rounded text-sm md:text-md font-semibold hover:bg-gray-500 hover:text-white"
          >
            See All My Projects
          </NavLink>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.slice(0, 3).map((project, index) => (
            <CardProject
              key={index}
              srcImage={project.srcImage}
              title={project.title}
              description={project.description}
              href={project.href}
              hrefGithub={project.hrefGithub}
              tech={project.tech}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
