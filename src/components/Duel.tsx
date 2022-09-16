import { motion } from 'framer-motion';
import { useRPS } from "../hooks/useRPS";
import { Option } from "./Option";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export function Duel() {
  const { selectedOption, houseSelected, handleRaffle, reset, result } = useRPS();

  return (
    <div className="w-2/3 flex items-center justify-between">
      <motion.div initial={{ scale: 1.25 }} className="flex flex-col items-center gap-8">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition,
          }}
          className="text-white tracking-widest text-lg"
        >
          YOU PICKED
        </motion.span>
        <Option type={selectedOption} isDisabled />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition }}
        className="flex flex-col items-center gap-6"
      >
        {result === 'USER' && (
          <>
            <strong className="text-6xl text-white">YOU WIN</strong>
          
            <button 
              className="bg-white w-full py-3.5 rounded-lg tracking-widest text-blue-500 hover:brightness-90 transition-all"
              onClick={() => reset()}
            >
              PLAY AGAIN
            </button>
          </>
        )}

        {result === 'DRAW' && (
          <>
            <strong className="text-6xl text-white">DRAW</strong>
          
            <button 
              className="bg-white w-full py-3.5 rounded-lg tracking-widest hover:brightness-90 transition-all"
              onClick={() => reset()}
            >
              PLAY AGAIN
            </button>
          </>
        )}
        {result === 'HOUSE' && (
          <>
            <strong className="text-6xl text-white">YOU LOSE</strong>
          
            <button 
              className="bg-white w-full py-3.5 rounded-lg tracking-widest text-red-500 hover:brightness-90 transition-all"
              onClick={() => reset()}
            >
              PLAY AGAIN
            </button>
          </>
        )}
      </motion.div>
      <motion.div 
        initial={{ scale: 1.25 }} 
        className="flex flex-col items-center gap-8"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition,
          }}
          onAnimationComplete={() => handleRaffle()}
          className="text-white tracking-widest text-lg"
        >
          THE HOUSE PICKED
        </motion.span>
        <Option type={houseSelected} isDisabled />
      </motion.div>
    </div>
  )
}