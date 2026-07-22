import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const contacts = [
  { label: 'WhatsApp', content: '0896-4426-823', icon: <FaWhatsapp /> },
  { label: 'Instagram', content: '@ardivannrr', icon: <FaInstagram /> },
  { label: 'Email', content: 'ardivannurraihanr@gmail.com', icon: <MdOutlineEmail /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
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
          Contact Me
        </motion.h1>

        <motion.p
          className="text-gray-500 dark:text-gray-300 max-w-2xl text-justify mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a question or want to collaborate? Feel free to reach out through any of the contact
          options below.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="w-full h-64 dark:bg-secondary-dark bg-gray-100 flex flex-col justify-center items-center gap-3 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-secondary-dark/70 shadow"
            >
              <span className="text-4xl dark:text-white">{item.icon}</span>
              <p className=" text-base text-gray-500 dark:text-gray-300 ">{item.label}</p>
              <p className="text-lg font-bold dark:text-white text-center px-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
