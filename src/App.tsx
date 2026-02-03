import { useState } from 'react';
import minion from './assets/minion.jpg';
import stitch from './assets/stitch.gif';
import venelope from './assets/venelope.gif';
import tigger from './assets/tigger.gif';
import patrick from './assets/patrick.gif';
import { motion } from 'motion/react';
import './App.css';

function App() {
  const [pageNo, setPageNo] = useState(0);
  const [btnScale, setBtnScale] = useState(1);

  const attackJulesies = () => 
  {
    setBtnScale(btnScale * 1.3);
  }

  return (
    <div className="h-screen bg-red-400 flex flex-col items-center justify-center text-white ">
      <div className="w-full md:w-1/2  h-3/4 lg:h-1/2 bg-white rounded-lg shadow-lg p-4">
      {pageNo === 0 && (
        <motion.div
          initial={{ x: -1000, opacity: 0, zIndex: -10 }}
          animate={{ x: 0, opacity: 1, zIndex: 10 }}
          exit={{ x: 1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full h-full flex flex-col items-center justify-center "
        >
          <img src={stitch} alt="Minion" className="w-[250px] rounded-t-lg" />
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col p-3">Julesies, I have a question for you...</div>
          <button onClick={() => setPageNo(1)} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-4 rounded mt-4">Hehehe okay</button>
        </motion.div>
      )}

      {pageNo === 1 && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="h-full h-full flex flex-col items-center justify-center p-4"
        >
          <img src={venelope} alt="Minion" className="w-[250px] rounded-t-lg" />
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col p-3">This is a very very important question...</div>
          <div className="flex gap-3">
            <button 
              onClick={() => setPageNo(2)} 
              style={{transform: `scale(${btnScale})`}} 
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-4 rounded mt-4">
                I Understand
            </button>
          </div>
        </motion.div>
      )}

      {pageNo === 2 && (
        <motion.div
          initial={{ x: 1000, opacity: 0, zIndex: -10 }}
          animate={{ x: 0, opacity: 1, zIndex: 10 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full h-full flex flex-col items-center justify-center p-4"
        >
          <img src={tigger} alt="Minion" className="w-[250px] rounded-t-lg" />
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col p-3">Are you SURE you are ready?!?!</div>
          <div className="flex gap-3">
            <button 
              onClick={() => setPageNo(3)} 
              style={{transform: `scale(${btnScale})`}} 
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-4 rounded mt-4">
                YESSSSSSS I"M READY
            </button>
          </div>
        </motion.div>
      )}

      {pageNo === 3 && (
        <motion.div
          animate={{ rotate: 720 }}
          transition={{ duration: 1 }}
          className="h-full h-full flex flex-col items-center justify-center p-4"
        >
          <img src={minion} alt="Minion" className="w-[250px] rounded-t-lg" />
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col p-3">Will you be my valentine?</div>
          <div className="flex gap-3">
            <button 
              onClick={() => setPageNo(4)} 
              style={{transform: `scale(${btnScale})`}} 
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-4 rounded mt-4">
                YASSSS
            </button>
            <button 
              onClick={() => attackJulesies()} 
              className="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white font-bold py-3 px-4 rounded mt-4">
                Naur
            </button>

          </div>
        </motion.div>
      )}

      {pageNo === 4 && (
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full h-full flex flex-col items-center justify-center p-4"
        >
          <img src={patrick} alt="Minion" className="w-[300px] rounded-t-lg" />
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col p-3">WOOOHOOOOOO!!!!!</div>
          <div className="text-4xl font-bold text-center text-red-500 flex flex-col ">
            Julesies is my Valentine!!!!
          </div>
        </motion.div>
      )}

      </div>
    </div>
  )
}

export default App
