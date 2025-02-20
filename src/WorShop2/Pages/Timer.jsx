import React, { useState, useContext } from 'react';
import { Worshop } from '../../Contexts/Context';
import { Controller } from './Controller';

export const Timer = () => {
  const { time, setIsRunning } = useContext(Worshop);
  const [theme, setTheme] = useState("dark"); 


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };


  const themes = {
    light: "bg-gray-200 text-black font-serif",
    dark: "bg-indigo-900 text-white font-mono",
    neon: "bg-black text-purple-800 font-sans  ",
  };

  const numberBase="text-5xl font-mono mt-4";

  const baseContainer = "w-90 h-80 rounded-xl p-8 text-center ";
  const buttonStyle = "mt-4 px-4 py-2 bg-white text-black rounded-lg border-[0.1rem] border-solid border-black";


  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : prevTheme === "light" ? "neon" : "dark"));
  };

  return (
    <div className={`${baseContainer} ${themes[theme]}`}>
      <h1 className="text-3xl font-bold">Temporizador</h1>
      <p className={`${numberBase} ${themes[theme]}`} >{formatTime(time)}</p>
      <Controller setIsRunnig={setIsRunning} />
      <button className={buttonStyle} onClick={changeTheme}>
        Cambiar Tema
      </button>
    </div>
  );
};
