import { motion } from "framer-motion";

const AnimationLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
  >
    {children}
  </motion.div>
);
export default AnimationLayout;
