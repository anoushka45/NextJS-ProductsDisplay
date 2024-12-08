"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Art de la table");
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar visibility

  return (
    <nav className="bg-white">
      {/* First Layer */}

 <div className="text-black px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Image src="/navbar/logo.svg" alt="Logo" width={133} height={65} />
          {/* Mobile Search Bar */}
          <div className="sm:hidden ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-[#F9FAFB]"
            />
          </div>
        </div>

        {/* Search Bar for Larger Screens */}
        <div className="hidden sm:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 rounded bg-[#F9FAFB]" // Adjusted width here
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h3m0 0h3m-3 0v3m0-3V9m-6 3h-3m0 0h-3m3 0v-3m0 3v3"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h3m0 0h3m-3 0v3m0-3V9m-6 3h-3m0 0h-3m3 0v-3m0 3v3"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.25 6.75L9 3m0 0l3.75 3.75M9 3v9.75"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between px-6 py-3">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div>
            <Image src="/navbar/logo.svg" alt="Logo" width={133} height={65} />
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow ">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 bg-[#F9FAFB] focus:ring-blue-400"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <Image src="/navbar/search.svg" alt="Search Icon" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Action Links (visible on larger screens) */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 font-medium text-[#3B4347] hidden md:flex">
          <a href="#" className="flex items-center space-x-2">
            <Image src="/navbar/lightbulb-icon.svg" alt="Inspirations Icon" width={20} height={20} />
            <span>Inspirations</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <Image src="/navbar/heart.svg" alt="Favourites Icon" width={20} height={20} />
            <span>Mes favoris</span>
            <span className="bg-[#CAD2D566] text-[10px] font-medium text-black rounded-lg w-[28px] h-[18px] flex items-center justify-center">24</span>
          </a>

          <a href="#" className="flex items-center space-x-2 bg-[#0093D0] text-white border border-[#007AAD] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-md">
            <Image src="/navbar/cart.svg" alt="Cart Icon" width={20} height={20} />
            <span>Panier</span>
          </a>

          <a href="#" className="flex items-center justify-center bg-[#EAEDEE] rounded-full w-[44px] h-[30px]"></a>

          <a href="#" className="flex items-center space-x-2">
            <span>FR</span>
            <Image src="/navbar/chevron-down.svg" alt="Language Icon" width={10} height={10} />
          </a>
        </div>

        {/* Hamburger Menu (visible on xs screens) */}
        <div className="md:hidden flex items-center" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Image src="/navbar/hamburger-icon.svg" alt="Hamburger Icon" width={24} height={24} />
        </div>
      </div>

      {/* Second Layer */}
      <div className="border-b border-gray-300">
        <ul className="flex justify-around uppercase hidden md:flex">
          {["Art de la table", "Mobilier", "Matériel de salle", "Cuisine", "Barbecue", "Tente", "Chauffage", "Podium - Piste de danse", "Son et lumière", "Packs", "Consommables"].map((link) => (
            <li key={link} className="relative">
              <a
                href="#"
                className={`px-3 py-3 block  ${activeLink === link ? "text-[#0093D0] font-semibold" : "text-[#6B7280]  font-medium text-sm"}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
              {activeLink === link && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0093D0]"></div>}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar (visible on xs screens) */}
      <div className={`fixed inset-0 bg-gray-700 bg-opacity-50 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="w-64 bg-white p-4 h-full">
          {/* Close Sidebar */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setSidebarOpen(false)} className="text-black text-lg">X</button>
          </div>
          
          {/* Action Links in Sidebar */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <Image src="/navbar/lightbulb-icon.svg" alt="Inspirations Icon" width={20} height={20} />
              <span>Inspirations</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Image src="/navbar/heart.svg" alt="Favourites Icon" width={20} height={20} />
              <span>Mes favoris</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-[#0093D0] text-white border border-[#007AAD] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-md">
              <Image src="/navbar/cart.svg" alt="Cart Icon" width={20} height={20} />
              <span>Panier</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span>FR</span>
              <Image src="/navbar/chevron-down.svg" alt="Language Icon" width={10} height={10} />
            </a>
          </div>

          {/* Second Layer Links */}
          <ul className="mt-4">
            {["Art de la table", "Mobilier", "Matériel de salle", "Cuisine", "Barbecue", "Tente", "Chauffage", "Podium - Piste de danse", "Son et lumière", "Packs", "Consommables"].map((link) => (
              <li key={link} className="py-2">
                <a
                  href="#"
                  className={`block text-sm ${activeLink === link ? "text-[#0093D0] font-semibold" : "text-[#6B7280]  font-medium"}`}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
