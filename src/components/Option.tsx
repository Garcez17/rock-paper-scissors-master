import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useRPS } from "../hooks/useRPS";

interface OptionProps {
  type: 'PAPER' | 'ROCK' | 'SCISSORS' | null;
  isDisabled?: boolean;
}

export function Option({ type, isDisabled = false }: OptionProps) {
  const { handleSelectOption } = useRPS();

  const optionType = useMemo(() => {
    const background = 
      type ===  'PAPER' && 'option_blue' || 
      type === 'ROCK' && 'option_red' || 
      type === 'SCISSORS' && 'option_amber' ||
      null;

    return background;
  }, [type]);

  if (!optionType) {
    return (
      <motion.button 
        className={`w-48 h-48 rounded-full flex items-center justify-center no_option`}
        disabled
      >
      </motion.button>
    )
  }

  return (
    <motion.button 
      className={`w-48 h-48 rounded-full flex items-center justify-center border-b-8 ${optionType} hover:brightness-95 transition-all`}
      whileTap={{ scale: 0.8 }}
      onClick={() => handleSelectOption(type)}
      disabled={isDisabled}
    >
      <div 
        className="bg-white w-[75%] h-[75%] relative flex items-center justify-center rounded-full border-t-8 border-gray-300 active:gray-300"
      >
        {type === 'PAPER' && <Image src="/icon-paper.svg" width={60} height={60} alt="option" />}
        {type === 'ROCK' && <Image src="/icon-rock.svg" width={60} height={60} alt="option" />}
        {type === 'SCISSORS' && <Image src="/icon-scissors.svg" width={60} height={60} alt="option" />}
      </div>
    </motion.button>
  )
}