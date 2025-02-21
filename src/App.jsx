import React from 'react'
import { Welcome } from './WorShop1/Pages/Welcome'
import { WorshopProvider } from './Contexts/Context'
import { Timer } from './WorShop2/Pages/Timer'
import { SoundPlayer } from './WorShop3/Pages/SoundPlayer'



export const App = () => {
  return (
    <>
      <WorshopProvider>
        <div className='w-full h-screen bg-gray-900 p-8 flex justify-around'>
          <Welcome/>
          <Timer/>
          <SoundPlayer/>
        </div>
      </WorshopProvider>
    </> 
  )
}
