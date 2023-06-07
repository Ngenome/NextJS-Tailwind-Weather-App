import { motion } from "framer-motion";
import { FC } from "react";

const WeatherCardWrapper: FC<{
  children: React.ReactNode;
  index?: number;
}> = ({ children, index }) => {
  return (
    <motion.div
      whileInView={{
        scale: 1,
        translateY: 0,
        transition: {
          duration: 0.5,
          delay: index ? index * 0.1 : 0,
        },
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.5,
        },
      }}
      className="bg-gradient-to-br  scale-80 opacity-100 from-white to-transparent backdrop-blur-md border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-xs"
    >
      {children}
    </motion.div>
  );
};

export default WeatherCardWrapper;
