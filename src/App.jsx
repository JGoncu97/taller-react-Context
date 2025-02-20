import React from 'react'
import { Welcome } from './WorShop1/Pages/Welcome'
import { WorshopProvider } from './Contexts/Context'
import './app.css'


export const App = () => {
  return (
    <>
      <WorshopProvider>
        <div className="main">
          <Welcome/>
        </div>
        
      </WorshopProvider>
    </> 
  )
}
