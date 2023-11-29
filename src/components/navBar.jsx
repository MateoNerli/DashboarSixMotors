import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ onToggleSidebar, isOpen }) => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={onToggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <FontAwesomeIcon
                  icon={isOpen ? faXmark : faBars}
                  className="w-6 h-6"
                />
              </button>
              <a
                href="https://sixmotors.onrender.com"
                className="flex ms-2 md:me-24"
                onClick={onToggleSidebar}
              >
                <img
                  src="../src/assets/diseño.png"
                  className="h-10 me-3"
                  alt="SixMotors"
                />

                <span className="self-center content-end text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Six<span className="text-[#7c9285]">Motors</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
