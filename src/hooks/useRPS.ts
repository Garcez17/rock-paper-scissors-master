import { useContext } from "react";
import { RPSContext } from "../contexts/RPSContext";

export function useRPS() {
  return useContext(RPSContext);
}