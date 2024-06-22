import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import style from "./styles/techstack.module.css";

const TechStack = () => {
  const [stack, setStack] = useState("all");

  const handlePageChange = (stack) => {
    setStack(stack);
  };

  const stacks = ["all", "languages", "frameworks", "tools"];

  return (
    <div
      style={{ marginBottom: "8rem", height: "max-content" }}
      className={style.main}
    >
      <motion.h1 variants={textVariant()} className={style.title}>
        My Weaponry ({technologies.length}+)
      </motion.h1>
      <motion.div variants={textVariant()} className={style.btn_container}>
        {stacks.map((currentStack, index) => (
          <button
            key={index}
            type="button"
            className={currentStack === stack ? style.btn_active : style.btn}
            onClick={() => handlePageChange(currentStack)}
          >
            {currentStack}
          </button>
        ))}
      </motion.div>
      <div className={style.tech_container}>
        {technologies
          .filter((technology) => technology.stack.includes(stack))
          .map((tech, index) => (
            <motion.abbr
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "", index * 0.15, 0.5)}
              title={tech.name}
              key={tech.name}
              className={style.tech}
            >
              <img
                className={style.tech_img}
                src={tech.icon}
                alt={tech.name}
                loading="lazy"
              />
            </motion.abbr>
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(TechStack, "", "");
