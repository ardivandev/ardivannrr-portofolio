import { useState, useRef, useEffect } from 'react';
import { FaBarsStaggered, FaMoon, FaSun, FaRegMoon, FaRegSun } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext.jsx';
import { NavLink } from 'react-router';

function Logo() {
  return (
    <a href="/" className="flex items-center font-bold text-lg md:text-2xl font-poppins">
      ardivan.
    </a>
  );
}

function Navbar({ isMenuOpen }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`flex gap-5 absolute top-full bg-gray-100 flex-col w-3/4 p-5 ${isMenuOpen ? 'right-0' : '-right-full'} md:static md:flex-row md:w-auto md:p-0 md:bg-transparent transition-all duration-300 dark:bg-secondary-dark md:dark:bg-transparent rounded-bl-2xl md:rounded-none`}
    >
      {links.map((link, index) => (
        <NavbarLink key={index} href={link.to} label={link.label} />
      ))}
    </nav>
  );
}

function NavbarLink({ href, label }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `after:content-[''] after:block md:after:w-full after:h-0.5 after:bg-black after:transition-transform after:origin-left after:w-1/4 dark:after:bg-white ${
          isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function ButtonToggleMenu({ handleToogleMenu }) {
  return (
    <button
      className="cursor-pointer text-2xl p-2 block md:hidden hover:text-gray-500 rounded"
      onClick={handleToogleMenu}
    >
      <span>
        <FaBarsStaggered />
      </span>
    </button>
  );
}

function ButtonDarkMode() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      className="group cursor-pointer text-2xl p-2 rounded-full flex"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <span className="text-yellow-500">
          <FaRegSun className="group-hover:hidden" />
          <FaSun className="hidden group-hover:block" />
        </span>
      ) : (
        <span className="text-gray-500">
          <FaRegMoon className="group-hover:hidden" />
          <FaMoon className="hidden group-hover:block" />
        </span>
      )}
    </button>
  );
}

function NavbarRight({ children }) {
  return <div className="flex gap-3">{children}</div>;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAreaRef = useRef(null); // bungkus Navbar + ButtonToggleMenu

  const handleToogleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Tutup menu kalau klik di luar area navbar/toggle button
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuAreaRef.current && !menuAreaRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-primary-dark dark:text-white shadow">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Logo />
        <div ref={menuAreaRef} className="flex items-center gap-3">
          <Navbar isMenuOpen={isMenuOpen} ref={menuAreaRef} />
          <NavbarRight ref={menuAreaRef}>
            <ButtonToggleMenu handleToogleMenu={handleToogleMenu} />
            <ButtonDarkMode />
          </NavbarRight>
        </div>
      </div>
    </header>
  );
}

export default Header;
