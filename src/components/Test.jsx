import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 1 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["items1", "items2", "items3", "items4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
