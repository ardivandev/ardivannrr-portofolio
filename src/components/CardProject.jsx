import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CardProject({ srcImage, title, description, href, hrefGithub, tech }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="w-full py-5 px-3 rounded-xl dark:bg-secondary-dark bg-gray-100 flex flex-col gap-2"
    >
      <div className="p-3">
        <img src={srcImage} alt={title} className="rounded-lg w-full" />
      </div>
      <div className="p-3">
        <h3 className="md:text-xl text-lg font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 py-2">{description}</p>
        <div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 py-1">
            Demo Live:
            <a
              href={href}
              className="text-blue-400 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            Link Github:
            <a href={hrefGithub} className="text-blue-400 hover:underline ml-2" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((item, index) => (
            <span key={index} className="text-xs border p-1.5 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
