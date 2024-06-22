import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, margin) =>
  function HOC() {
    const isLargeScreen = useMediaQuery({ minWidth: "100vw" });

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: !isLargeScreen, amount: 0.25 }}
        className={`max-w-[100vw]  mx-auto ${margin} h-max `}
      >
        <span id={idName}>&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
