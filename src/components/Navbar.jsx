import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { fadeIn, staggerContainer } from "../utils/motion";
import { logo, light, dark } from "../assets";
import { navLinks } from "../constants";
import style from "./styles/navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 780) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.navbar_container}>
      <nav className={`${style.navbar} ${scrolled ? "fixed" : ""}`}>
        <h1 className={style.logo}>
          <a href="/#" className={style.navlink}>
            IK.
          </a>
        </h1>

        {/* desktop navlink */}
        <ul className={style.navlink}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={active === link.name ? `${style.active}` : null}
            >
              <a
                href={link.url}
                target={link.name === "Blog" ? "_blank" : "_self"}
                className={style.font}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={style.theme_btn}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <img
                  src={light}
                  className={style.theme_img}
                  alt="light theme"
                  loading="lazy"
                />
              ) : (
                <img
                  src={dark}
                  className={style.theme_img}
                  alt="dark theme"
                  loading="lazy"
                />
              )}
            </button>
          </li>
        </ul>

        {/* hamburger menu */}
        <div
          className={style.hamburger}
          onClick={handleMenuClick}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleMenuClick();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <span className={`${style.line} ${isOpen ? style.open : ""}`} />
          <span className={`${style.line} ${isOpen ? style.open : ""}`} />
          <span className={`${style.line} ${isOpen ? style.open : ""}`} />
        </div>

        {/* mobile menu */}
        <ul
          variants={staggerContainer()}
          initial="hidden"
          // whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${style.mobilemenu} ${
            isOpen ? "h-screen opacity-100" : "h-0"
          }`}
        >
          <li>
            <button
              type="button"
              className={`${style.theme_btn} mt-[130px]`}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <img
                  src={light}
                  className={style.theme_img}
                  alt="light theme"
                  loading="lazy"
                />
              ) : (
                <img
                  src={dark}
                  className={style.theme_img}
                  alt="dark theme"
                  loading="lazy"
                />
              )}
            </button>
          </li>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={active === link.name ? style.active : null}
            >
              <motion.a
                href={link.url}
                className={style.mobile_font}
                variants={fadeIn("right", "", index * 0.2, 1)}
                initial="hidden"
                // whileInView="show"
                onClick={() => {
                  setActive(link.name);
                  handleMenuClick();
                }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
