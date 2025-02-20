import React from 'react'
import { Welcome } from './WorShop1/Pages/Welcome'
import { WorshopProvider } from './Contexts/Context'
import { Timer } from './WorShop2/Pages/Timer'



export const App = () => {
  return (
    <>
      <WorshopProvider>
        <div className='w-full h-screen bg-gray-900 p-8 flex justify-around'>
          <Welcome/>
          <Timer/>
        </div>
      </WorshopProvider>
    </> 
  )
}
