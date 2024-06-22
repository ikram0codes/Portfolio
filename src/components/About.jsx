import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <div style={{ marginBottom: "5rem" }}>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para} >
      <img
        src="https://res.cloudinary.com/dz4z5m7qt/image/upload/v1718906806/HAM_2920_nfkugc.jpg"
        alt="IKRAM KHAN"
        className={style.ikImage}
      />

      <div className={style.wrapper}>
        <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
          I'm
          <a
            href="https://www.linkedin.com/in/ikram-khan-b93251311"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            &nbsp; IKRAM KHAN, &nbsp;
          </a>
          a passionate Full Stack Web Developer from Pakistan specializing in
          Front-end Development, Real-time Web Sockets, Backend Development, Web
          Design, and blogging. I excel in creating intuitive user interfaces
          and robust backend systems, driven by a commitment to innovation and
          continuous learning.
        </motion.p>
        {/* <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        I have a profound love for coding, reading history books, and watching
        documentaries, which help me gain diverse perspectives and fuel my
        creativity. I am also passionate about playing soccer ⚽ and enjoy
        traveling to unique and historical places.
        <br />I love exploring new programming languages and frameworks,
        contributing to open-source projects, and participating in hackathons in
        free time, which continuously improve and enhance my problem-solving
        abilities. I enjoy working with people, especially in developer teams,
        and sharing experiences and creativity.
      </motion.p> */}
        <motion.p variants={fadeIn("", "", 0.75, 1)} className={style.text}>
          My journey began at 12, turning a childhood fascination with computers
          and games into a thriving career in web development.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.75, 1)} className={style.text}>
          My first project, an e-commerce site for a friend's father, led to
          numerous local business projects and solidified my love for solving
          real-world problems through web solutions. Now, as the CEO of a small
          company and a dedicated freelancer, I continue to deliver impactful
          web solutions that exceed expectations.
        </motion.p>
        <motion.p variants={fadeIn("", "", 1.25, 1)} className={style.text}>
          Inspired by what you see?{" "}
          <a href="/#contact" className={style.link} rel="noreferrer">
            Contact
          </a>{" "}
          me or reach me out at <b>ikram.codes@gmail.com</b> to collaborate on
          your next big project. Explore my resume to learn more about my
          journey, qualifications, and expertise., eager to collaborate on your
          next big endeavor.
        </motion.p>
      </div>
    </div>
  </div>
);

export default SectionWrapper(About, "about", "");
