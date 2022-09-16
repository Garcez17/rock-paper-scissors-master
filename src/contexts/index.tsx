import { ReactNode } from "react";
import { RPSProvider } from "./RPSContext";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <RPSProvider>{children}</RPSProvider>
}