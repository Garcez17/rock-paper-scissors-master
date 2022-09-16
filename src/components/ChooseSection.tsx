import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRPS } from "../hooks/useRPS";
import { Option } from "./Option";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

export function ChooseSection() {
  const { selectedOption, handleSelectOption } = useRPS();

  return (
    <motion.div className="h-64 w-64 relative">
      {selectedOption === null && (
        <motion.div key="1" transition={transition} exit={{ opacity: 0 }}>
          <Image src="/bg-triangle.svg" layout="fill" alt="Triangle" />
        </motion.div>
      )}

      {(selectedOption === null || selectedOption === 'PAPER') && (
        <motion.div 
          key="2" 
          transition={transition} 
          exit={selectedOption === 'PAPER' ?
          {
            x: -96,
            y: 96,
            scale: 1.25,
          } : { opacity: 0, display: 'none' }} 
          className="absolute -top-16 -left-24"
        >
          <Option type="PAPER" />
        </motion.div>
      )}

      {(selectedOption === null || selectedOption === 'SCISSORS') && (
        <motion.div 
          key="3" 
          transition={transition} 
          exit={selectedOption === 'SCISSORS' ? {
            x: -352,
            y: 96,
            scale: 1.25,
          } : { opacity: 0, display: 'none' }} 
          className="absolute -top-16 -right-24"
        >
          <Option type="SCISSORS" />
        </motion.div>
      )}

      {(selectedOption === null || selectedOption === 'ROCK') && (
        <motion.div 
          key="4" 
          transition={transition} 
          exit={selectedOption === 'ROCK' ? {
            x: -232,
            y: -112,
            scale: 1.25,
          } : { opacity: 0, display: 'none' }} 
          className="absolute -bottom-20 left-10"
        >
          <Option type="ROCK" />
        </motion.div>
      )}
    </motion.div>
  )
}