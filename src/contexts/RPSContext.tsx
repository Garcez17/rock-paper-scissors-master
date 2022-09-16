import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies';

export interface RPSContextData {
  handleSelectOption: (option: 'PAPER' | 'ROCK' | 'SCISSORS' | null) => void;
  selectedOption: 'PAPER' | 'ROCK' | 'SCISSORS' | null;
  houseSelected: 'PAPER' | 'ROCK' | 'SCISSORS' | null;
  score: number;
  handleRaffle: () => void;
  reset: () => void;
  result: 'USER' | 'HOUSE' | 'DRAW' | null;
}

interface RPSProviderProps {
  children: ReactNode;
}

export const RPSContext = createContext({} as RPSContextData);

const options = ['PAPER', 'ROCK', 'SCISSORS'];

function checkGame(user: 'PAPER' | 'ROCK' | 'SCISSORS', house: 'PAPER' | 'ROCK' | 'SCISSORS') {
  switch (user) {
    case 'PAPER':
      if (house === 'PAPER') return 'DRAW';

      if (house === 'SCISSORS') return 'LOSE';

      if (house === 'ROCK') return 'WIN';
    case 'ROCK':
      if (house === 'PAPER') return 'LOSE';

      if (house === 'SCISSORS') return 'WIN';

      if (house === 'ROCK') return 'DRAW';
    case 'SCISSORS':
      if (house === 'PAPER') return 'WIN';

      if (house === 'SCISSORS') return 'DRAW';

      if (house === 'ROCK') return 'LOSE';
  
    default:
      break;
  }
}

export function RPSProvider({ children }: RPSProviderProps) {
  const [selectedOption, setSelectedOption] = useState<'PAPER' | 'ROCK' | 'SCISSORS' | null>(null);
  const [score, setScore] = useState(0);
  const [houseSelected, setHouseSelected] = useState<'PAPER' | 'ROCK' | 'SCISSORS' | null>(null);
  const [result, setResult] = useState<'USER' | 'HOUSE' | 'DRAW' | null>(null);

  useEffect(() => {
    const cookies = parseCookies();

    const scoreCookie = cookies['rps.score'];

    if (scoreCookie) setScore(Number(scoreCookie));
  }, []);

  const handleSelectOption = useCallback((option: 'PAPER' | 'ROCK' | 'SCISSORS' | null) => {
    setSelectedOption(option);
  }, []);

  const handleRaffle = useCallback(() => {
    const randomOptionIndex = Math.floor(Math.random() * options.length);

    const option = options[randomOptionIndex] as 'PAPER' | 'ROCK' | 'SCISSORS';

    const result = checkGame(selectedOption!, option);

    if (result === 'WIN') {
      setScore(oldState => oldState += 1);

      setCookie(null, 'rps.score', String(score + 1), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      
      setResult('USER');
    }

    if (result === 'DRAW') setResult('DRAW');

    if (result === 'LOSE') setResult('HOUSE');
    
    setHouseSelected(option);
  }, [selectedOption, score]);
  
  const reset = useCallback(() => {
    setHouseSelected(null);
    setSelectedOption(null);
    setResult(null);
  }, []);

  return (
    <RPSContext.Provider value={{ selectedOption, handleSelectOption, score, houseSelected, handleRaffle, reset, result }}>
      {children}
    </RPSContext.Provider>
  )
} 