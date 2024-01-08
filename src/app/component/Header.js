"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../contsxt/search";

const Header = () => {
  const { setsearchActiv } = useContext(SearchContext);
  const [heder, setheder] = useState(false);
  const [nav, setnav] = useState(false);

  const desctopMode = useMediaQuery({ query: "(min-width:1300px)" });

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 40) {
        setheder(true);
      } else {
        setheder(false);
      }
      ///search
      if (window.scrollY > 800) {
        setsearchActiv(true);
      } else {
        setsearchActiv(false);
      }
      console.log(window.scrollY)
    };
    ////add eventlissener
    window.addEventListener("scroll", handelScroll);
    ////remove eventlissener
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <header
      className={`${
        heder ? " bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*logo*/}
          <Link
            to="home"
            smooth={desctopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"icons/logo.svg"} width={194} height={64} alt="" />
          </Link>
          {/*Nav open menu*/}
          <div
            onClick={() => setnav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/*Nav open menu*/}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Why Us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonals"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            testimonals
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            see All Cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
