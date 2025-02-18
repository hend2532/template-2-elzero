import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex h-[100px] border-b-2 border-b-[#eee] mx-8 lg:mx-20 justify-between items-center text-white">
      <img src="/images/logo.png" alt="logo" className="w-[120px]" />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          <FaBars size={25} />
        </button>

        <nav
          className={`absolute md:relative px-8 md:px-0 bg-[#171515b9] md:bg-transparent top-[100px] md:top-0 left-0 w-full md:w-auto md:flex
            ${isOpen ? "flex" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 font-medium items-center w-full h-[70vh]">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full md:w-auto text-center">
                <a
                  href={link.href}
                  className="block px-2 py-[32px]  border-b-[3px] border-b-transparent hover:text-[#19c8fa] hover:border-b-[#19c8fa]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2 items-center border-l-2 px-6 h-[40px]">
          <FaSearch size={25} aria-label="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
