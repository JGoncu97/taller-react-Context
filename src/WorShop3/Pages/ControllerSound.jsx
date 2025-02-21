import React from 'react';
import { useContext } from 'react';
import { Worshop } from '../../Contexts/Context';



export const ControllerSound = () => {
    const { setIsRunning, setTime } = useContext(Worshop);

  return (
    <>
        <button className='ml-[1rem] w-[4.5rem] border-solid border-black border-[0.1rem] bg-white text-black p-[0.2rem] rounded-[0.5rem] m-[0.2rem]' onClick={() => setIsRunning(true)}>Iniciar</button>
        <button className='w-[4.5rem] border-solid border-black border-[0.1rem] bg-white text-black p-[0.2rem] rounded-[0.5rem] m-[0.2rem]' onClick={() => setIsRunning(false)}>Pausar</button>
        <button className='w-[5.5rem] border-solid border-black border-[0.1rem] bg-white text-black p-[0.2rem] rounded-[0.5rem] m-[0.2rem]' onClick={() => { setTime(60); setIsRunning(false); }}>Reiniciar</button>
    </>
  )
}
