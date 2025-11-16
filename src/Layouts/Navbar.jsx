import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // Update active section on scroll and close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Update active section
      nav.forEach((item, i) => {
        const section = document.querySelector(item.link);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(i);
          }
        }
      });

      // Close menu when scrolling
      if (showMenu) setShowMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav, showMenu]);

  const handleClick = (i) => {
    setActive(i);
    setShowMenu(false); // close menu when a link is clicked
  };

  return (
    <div className="w-full flex justify-end fixed top-10 right-10 z-[999]">
      {/* Hamburger Button */}
      <div
        className="cursor-pointer rounded-lg bg-[#F5F1EB]/90 p-2 shadow-lg"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} className="text-[#C6A87D]" />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 right-0 z-[999] flex flex-col gap-3 bg-[#F5F1EB]/95 backdrop-blur-md p-4 rounded-md shadow-md transition-all duration-300 ${
          showMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {nav.map((item, i) => {
          const isActive = i === active;

          return (
            <a
              key={i}
              href={item.link}
              onClick={() => handleClick(i)}
              className={`flex items-center gap-2 p-2 rounded-md text-lg transition-colors duration-200 ${
                isActive
                  ? "bg-[#C6A87D] text-white"
                  : "bg-transparent text-[#5A5A5A] hover:bg-[#EADFC7]"
              }`}
            >
              {createElement(item.icon, {
                className: isActive ? "text-white" : "text-[#5A5A5A]",
              })}
              <span className={`capitalize ${isActive ? "text-white" : "text-[#5A5A5A]"}`}>
                {item.link.replace("#", "") === "/blog" ? "Blog" : item.link.replace("#", "")}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
