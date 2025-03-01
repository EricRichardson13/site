import { motion } from "framer-motion";

const NavButton = ({ text, onClick }) => {
  return (
    <motion.button
      className="nav-button"
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff"
      }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default NavButton;