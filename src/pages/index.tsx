import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl w-full py-8">
        <Header />
      </div>

      <button 
        className="absolute right-8 bottom-8 py-1 px-8 border-2 border-gray-400 rounded-md text-white font-bold"
      >
        RULES
      </button>
    </div>
  )
}

export default Home
