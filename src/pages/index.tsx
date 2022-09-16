import type { NextPage } from 'next'
import { useState } from 'react';

import { Board } from '../components/Board'
import { Header } from '../components/Header'
import { RulesModal } from '../components/RulesModal';

const Home: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <RulesModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />

      <div className="flex items-center justify-center">
        <div className="max-w-7xl w-full h-screen flex flex-col items-center">
          <Header />

          <Board />
        </div>

        <button 
          className="absolute right-8 bottom-8 py-1 px-8 border-2 border-gray-400 rounded-md text-white font-bold"
          onClick={() => setModalIsOpen(true)}
        >
          RULES
        </button>
      </div>
    </>
  )
}

export default Home
