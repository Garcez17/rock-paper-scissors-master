import { createContext, ReactNode, useCallback, useState } from "react";

export interface RPSContextData {
  handleSelectOption: (option: 'PAPER' | 'ROCK' | 'SCISSORS' | null) => void;
  selectedOption: 'PAPER' | 'ROCK' | 'SCISSORS' | null;
  score: number;
}

interface RPSProviderProps {
  children: ReactNode;
}

export const RPSContext = createContext({} as RPSContextData)

export function RPSProvider({ children }: RPSProviderProps) {
  const [selectedOption, setSelectedOption] = useState<'PAPER' | 'ROCK' | 'SCISSORS' | null>(null);
  const [score, setScore] = useState(0);

  const handleSelectOption = useCallback((option: 'PAPER' | 'ROCK' | 'SCISSORS' | null) => {
    setSelectedOption(option);
  }, []);

  return (
    <RPSContext.Provider value={{ selectedOption, handleSelectOption, score }}>
      {children}
    </RPSContext.Provider>
  )
} 