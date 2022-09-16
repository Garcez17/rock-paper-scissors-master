import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useRPS } from "../hooks/useRPS";

import { ChooseSection } from "./ChooseSection";
import { Duel } from "./Duel";

export function Board() {
  const { selectedOption } = useRPS();
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence exitBeforeEnter>
        {!selectedOption ? <ChooseSection key="choose_section" /> : <Duel key="duel" />}
      </AnimatePresence>
    </div>
  )
}