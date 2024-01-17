// Create Header component
import React from "react";
import { useState, useEffect } from "react";
import Link from "./buttons/Link";
const Header = () => {
  // if mobile device, display hamburger menu
  // else display full menu

  // if header is on top of page, display transparent background
  // else display white background
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const items = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Skills",
      link: "#skills",
    },

    {
      name: "Careers",
      link: "#careers",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  // scroll into view
  const handleScrollToView = (e, link) => {
    console.log(link)
    if (link === "/") {
      const element = document.querySelector("#top");
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const element = document.querySelector(link);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // use hamburger menu for mobile devices
  // else use full menu

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const MobileMenu = () => {
    return (
      <div className="flex flex-col text-center">
        <div>
          <div
            className="flex justify-between items-center  px-12 py-4 cursor-pointer"
            onClick={handleShowMenu}
          >
            三
          </div>
        </div>
        <div
          className={`flex flex-col fixed items-center w-full h-screen pt-12 bg-white gap-6  ${
            showMenu ? "flex" : "hidden"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="text-grey-800 text-center text-2xl hover:text-grey-600 cursor-pointer transition-colors duration-500 hover:bg-gray-200 px-4"
              onClick={(e) => {
                handleScrollToView(e, item.link);
                handleShowMenu();
              }}
            >
              {item.name}
            </div>
          ))}
          <Link
            link="./resume.pdf"
            name="Resume"
            className={
              "border-2 w-1/2 rounded-xl px-4 py-2 cursor-pointer transition-colors duration-500 hover:bg-gray-200"
            }
          />
          <div
            onClick={handleShowMenu}
            className="border-2 px-2 rounded-full border-black cursor-pointer"
          >
            X
          </div>
        </div>
      </div>
    );
  };

  // if mobile device, display hamburger menu
  // else display full menu

  if (window.innerWidth <= 800) {
    return <MobileMenu />;
  }

  return (
    <header
      className={`flex-col lg:fixed transition-all ease-in-out duration-500 w-full bg-white  ${
        scrollPosition === 0
          ? "lg:py-[4px] border-0 shadow-lg"
          : "border-b-gray-500 "
      } flex top-0 z-100`}
    >
      <div className="font-mono py-4 w-full flex justify-end px-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-grey-800 flex items-center text-base hover:text-grey-600 cursor-pointer transition-colors duration-500 hover:bg-gray-200 px-4"
            onClick={(e) => handleScrollToView(e, item.link)}
          >
            {item.name}
          </div>
        ))}
        <Link
          link="./resume.pdf"
          name="Resume"
          className={
            "border-2 rounded-xl px-4 py-2 cursor-pointer transition-colors duration-500 hover:bg-gray-200"
          }
        />
      </div>
    </header>
  );
};

export default Header;
