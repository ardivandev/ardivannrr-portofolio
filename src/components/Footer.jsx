import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/ardivandev', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ardivannrr/', label: 'LinkedIn' },
  { icon: FaInstagram, url: 'https://instagram.com/ardivannrr', label: 'Instagram' },
  { icon: FaEnvelope, url: 'mailto:ardivannurraihanr@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
];

function Logo() {
  const { darkMode } = useTheme();

  return (
    <div>
      {darkMode ? (
        <img src="/logo/white-logo.svg" alt="Logo" className="bg-secondary-dark rounded-xl" />
      ) : (
        <img src="/logo/dark-logo.svg" alt="Logo" className="bg-gray-100 rounded-xl" />
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark text-gray-600 dark:text-gray-300 pt-20 pb-5 px-5">
      <div className="flex flex-col gap-10">
        <div className="w-full border-t border-gray-300 dark:border-secondary-dark"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="flex flex-col gap-2 ">
            <Logo />
            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-800 dark:text-white">
              Ardivan Nur Raihan Rahman
            </h3>
          </div>

          <div className="flex flex-col gap-5 ">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-800 dark:text-white">
              Navigation Links
            </h3>
            <nav className="text-sm md:text-base flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className="dark:hover:text-white hover:text-black transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5 ">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-800 dark:text-white">
              Social Media
            </h3>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xl dark:hover:text-white hover:text-black transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-5">
          <div className="w-full  border-t border-gray-300 dark:border-secondary-dark"></div>

          <p className="text-xs md:text-sm ">
            &copy; {new Date().getFullYear()} Ardivan Nur Raihan Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
