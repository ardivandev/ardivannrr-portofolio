import BlackImageNotFound from '../assets/images/black-not-found.svg';
import WhiteImageNotFound from '../assets/images/white-not-found.svg';
import { useTheme } from '../context/ThemeContext.jsx';

function NotFoundImage() {
  const { darkMode } = useTheme();
  return (
    <img
      src={darkMode ? WhiteImageNotFound : BlackImageNotFound}
      alt="404 Not Found"
      className="w-100 h-auto mb-4"
    />
  );
}

export default function NotFound() {
  return (
    <div className=" h-[calc(100dvh-5rem)] mt-20 p-5 dark:bg-dark">
      <div className="container flex flex-col items-center justify-center h-full">
        <NotFoundImage />
        <h1 className="text-3xl font-bold mb-2 text-center dark:text-white font-poppins">
          404 - Page Not Found
        </h1>
        <p className="text-md text-gray-600 text-center dark:text-gray-300">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
