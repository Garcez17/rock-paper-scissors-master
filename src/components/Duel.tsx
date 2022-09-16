import { motion } from 'framer-motion';
import { useRPS } from "../hooks/useRPS";
import { Option } from "./Option";

export function Duel() {
  const { selectedOption } = useRPS();

  if (!selectedOption) return <div><h1>Option not found</h1></div>;

  return (
    <div className="w-2/4 flex items-center justify-between">
      <motion.div initial={{ scale: 1.25 }}>
        <Option type={selectedOption} isDisabled />
      </motion.div>
      <motion.div initial={{ scale: 1.25 }}>
        <Option type={null} />
      </motion.div>
    </div>
  )
}