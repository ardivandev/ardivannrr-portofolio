import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import CardProject from '../components/CardProject';

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

export default function Projects() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const filteredProjects = projects.filter((project) => {
    const keyword = query.toLowerCase();
    return (
      project.title.toLowerCase().includes(keyword) ||
      project.description.toLowerCase().includes(keyword) ||
      project.tech.some((t) => t.toLowerCase().includes(keyword))
    );
  });

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
          My Projects
        </motion.h1>

        <motion.p
          className="text-gray-500 dark:text-gray-300 max-w-2xl text-justify mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          This is a collection of projects I've worked on, along with the tools used in each one -
          reflecting my skills, experience, and growth as a developer over time.
        </motion.p>

        <form onSubmit={handleSearch} className="mx-auto flex gap-5">
          <input
            type="search"
            name="search"
            placeholder="Search for projects..."
            className="border py-2 px-3 rounded text-sm w-full md:w-96 bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="border-2 border-gray-500 py-2 px-3 rounded text-sm md:text-base font-semibold hover:bg-gray-500 hover:text-white cursor-pointer"
          >
            <FaSearch />
          </button>
        </form>

        <motion.div
          className="mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => <CardProject key={index} {...project} />)
          ) : (
            <p className="text-gray-500 text-sm ">No projects found.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
